import createApp from "./app.js";

const app = createApp();

const port = process.env.PORT || 3333;

app.listen(port, () => {
  console.log(
    `🔥V1.0.0 - Server is running on port http://localhost:${port}/api/v1.0/`,
  );
});
