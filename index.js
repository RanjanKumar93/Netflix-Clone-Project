const express = require("express");
const path = require("path");
const app = express();
const port = 9000;

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.listen(port, () => {
  console.log(`http://localhost:${port}/`);
});
