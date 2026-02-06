const app = require("./app")
require("dotenv").config()
const PORT = process.env.PORT

app.listen(3333, () => {
  console.log(`Api iniciada em http://localhost:${PORT}`)
})
