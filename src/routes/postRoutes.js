import express from "express";
import multer from "multer";
import cors from "cors";
import {
  adicionarPost,
  atualizarNovoPost,
  listarPosts,
  uploadImagem,
} from "../controllers/postController.js";

const corsOptions = {
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
  optionsSuccessStatus: 200,
};

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ dest: "./uploads", storage });

const routes = (app) => {
  app.use(express.json());
  app.use(cors(corsOptions));

  app.get("/posts", listarPosts);
  app.post("/posts", adicionarPost);
  app.post("/upload", upload.single("image"), uploadImagem);
  app.put("/upload/:id", atualizarNovoPost);
};

export default routes;
