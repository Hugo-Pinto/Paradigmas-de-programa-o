const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());
require("./src/models/Linguagens");
const Linguagens = require("./src/models/Linguagens");
require("./src/models/Paradigmas");
const Paradigmas = require("./src/models/Paradigmas");
const linguagemController = require("./src/controllers/LinguagemController");
const paradigmasController = require("./src/controllers/ParadigmasController");


mongoose.connect("mongodb+srv://TesteParadigma:123654@testecluster.hd5w7.mongodb.net/TrabParadigmas?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }
);


const cors = require("cors");
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.post("/linguagens", linguagemController.store);
app.post("/paradigmas", paradigmasController.store);

app.get("/", linguagemController.show);
app.get("/paradigmas", paradigmasController.show);
// API PARA COMUNICAR BACK END COM FRONT END API AXIOS

app.delete("/linguagens/:id", (req, res) => {
  const linguagens = Linguagens.deleteOne({ _id: req.body }, (err) => {
    if (err)
      return res.status(400).json({
        error: true,
        message: "Error: fracasso ao tentar excluir..",
      });
    return res.json({
      error: false,
      message: "Exito ao Deletar.",
    });
  });
});
app.put("/linguagens/:id", (req, res) => {
  const linguagens = Linguagens.updateOne(
    { _id: req.body },
    req.body,
    (err) => {
      if (err)
        return res.status(400).json({
          error: true,
          message: "Error: fracasso ao tentar editar.",
        });
      return res.json({
        error: false,
        message: "Exito ao editar.",
      });
    }
  );
});
app.listen(4000);
