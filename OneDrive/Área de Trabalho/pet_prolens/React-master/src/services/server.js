const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3000;

// Inicia o servidor
app.listen(port, () => {
  console.log("Servidor está rodando");
});

app.use(cors());

app.use(bodyParser.json());

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username === "usuario" && password === "senha") {
    res.status(200).json({
      message: "Login bem-sucedido",
      token: "seu-token-de-autenticacao",
    });
  } else if (username === "usuario" && password !== "senha") {
    res.status(401).json({ message: "Senha inválida!" });
  } else {
    res.status(401).json({ message: "Usuário não encontrado!" });
  }
});

app.post("/", (req, res) => {
  const { name, email, phone, message } = req.body;

  if (name !== "" && email !== "" && phone !== "" && message !== "") {
    res.status(200).json({
      message: "Mensagem recebida com sucesso!",
      token: "seu-token-de-autenticacao",
    });
  } else {
    res.status(401).json({ message: "Preencha todos os campos!" });
  }
});
