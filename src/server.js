const app = require("./app")
const port = 3333

app.listen(3333, () => {
  console.log(`Api iniciada em http://localhost:${port}`)
})
