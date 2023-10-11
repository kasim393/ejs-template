const express = require("express");
const app = express();
const port = 5000;
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
const { createLrPdfDto } = require("./data.js");

app.get("/page", (req, res) => {
  res.render("pages/index", {
    LrPdf: createLrPdfDto,
  });
});

app.listen(port, () => {
  console.log(`App listening at port ${port}`);
});
