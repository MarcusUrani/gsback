import { MongoClient } from "mongodb";

export default async function conectarAoBanco(connectionString) {
  let mongoClient;

  try {
    mongoClient = new MongoClient(connectionString);
    console.log("Conectando ao cluster de dados");
    await mongoClient.connect();
    console.log("Conectado ao MongoDb Atlas com sucesso");

    return mongoClient;
  } catch (err) {
    console.error("Erro ao conectar ao MongoDb Atlas:", err);
    process.exit();
  }
}
