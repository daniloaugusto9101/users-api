const express = require("express")

const app = express()

app.get("/", (req, res) => {
  res.status(200).send("Olá, página inicial da API")
})

app.listen(3333, () => {
  console.log(`Api iniciada`)
})
