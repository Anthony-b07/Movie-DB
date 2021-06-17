const express = require("express");
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

app.get("/test", (req, res) => {
  res.send(`{ status: 200, message: "ok" }`);
});
app.get("/time", (req, res) => {
  res.send(`{status:200, message:${TIME}}`);
});
let date = new Date();
let TIME = date.getHours() + ":" + date.getMinutes();
