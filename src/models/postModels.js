import { ObjectId } from "mongodb";
import conectarAoBanco from "../config/dbConfig.js";

const conexao = await conectarAoBanco(process.env.CONNECTION_STRING);

export async function getTodosOsPosts() {
  const db = conexao.db("instabytes");
  const colecao = db.collection("posts");
  return colecao.find().toArray();
}

export async function criarPost(novoPost) {
  const db = conexao.db("instabytes");
  const colecao = db.collection("posts");
  return colecao.insertOne(novoPost);
}

export async function atualizarPost(id, post) {
  const db = conexao.db("instabytes");
  const colecao = db.collection("posts");
  const objId = ObjectId.createFromHexString(id);
  return colecao.updateOne({ _id: new ObjectId(objId) }, { $set: post });
}
