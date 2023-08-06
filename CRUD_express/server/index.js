const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

const db = mysql.createPool({
  host: "127.0.0.1",
  port: "3306",
  user: "root",
  password: "root",
  database: "brunettostore",
});

app.use(cors());
app.use(express.json());

//nodemon (sempre que fazer alguma alteracao ele da um restart no servidor)

//app.get para pegar (fazer requisicoes)
//app.post para enviar (solicitacoes)
//app.delete para deletar
//app.put para update

//request (tudo que vai entrar)
//result (tudo que vai sair)

app.post("/register", (req, res)=>{
  const { name } = req.body;
  const { cost } = req.body;
  const { category } = req.body;

  let SQL = "INSERT INTO games ( name, cost, category ) VALUES ( ?, ?, ? )";

  db.query(SQL, [name, cost, category],(err, result) =>{
    console.log(err);
  });
})

app.get("/getCards", (req, res) => {
  let SQL = "SELECT * FROM games";

  db.query(SQL, (err, result)=> {
    if (err) console.log(err);
    else res.send(result);
  });
});

app.put("/edit", (req, res) => {
  const { id } = req.body
  const { name } = req.body
  const { cost } = req.body
  const { category } = req.body

  let SQL = "UPDATE games SET name = ?, cost = ?, category = ? WHERE idgames = ?";

  db.query(SQL, [name, cost, category, id], (err, result) => {
    if(err) console.log(err)
    else res.send(result)
  })
})

app.delete("/delete/:id", (req, res) => {
  const { id } = req.params

  let SQL = "DELETE FROM games WHERE idgames = ?"

  db.query(SQL, [id], (err, result) => {
    if(err) console.log(err)
    else res.send(result)
  })
})

app.listen(3001, () => {
  console.log("Server on!");
});