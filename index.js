const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const SummarizeControl = require("./summarizer/summarizerControl");

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.render("index");
});

app.use("/", SummarizeControl);

let port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("server running...");
});
