const express = require("express")
const app = express()
const port = 3333
app.use(express.json())

let db = [
  { id: 1, Nome: "Cliente 1", Idade: "20" },
  { id: 2, Nome: "Cliente 2", Idade: "20" },
  { id: 3, Nome: "Cliente 3", Idade: "200" },
]

app.get("/", (req, res) => {
  res.status(200).send("Home | Bem vindo a API")
})

app.get("/users", (req, res) => {
  res.status(200).json(db)
})

app.post("/users", (req, res) => {
  const body = req.body
  if (!body) res.status(400).end()
  db.push(body)
  return res.json(body)
})

app.delete("/users/:id", (req, res) => {
  const id = parseInt(req.params.id)
  let newDB = db.filter((item) => {
    return item.id !== id
  })
  db = newDB
  res.send(newDB)
})

app.put("/users/:id", (req, res) => {
  const id = parseInt(req.params.id)
  const body = req.body
  let newDB = db.map((item) => {
    if (item.id == id) {
      item = body
    }
    return item
  })
  db = newDB
  res.send(db)
})

app.listen(port, () => {
  console.log(`Api iniciada em http://localhost:${port}`)
})
