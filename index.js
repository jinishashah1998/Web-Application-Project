const express = require("express");
var request = require("request");
const path = require("path");
const PORT = process.env.PORT || 8080;
const cors = require("cors");
var num = 2328;
const { default: Axios } = require("axios");
const app = express();
app.use(cors());


app
  .use(express.static(path.join(__dirname, "public/")))
  .set("views", path.join(__dirname, "views/pages"))
  .set("view engine", "ejs")

 .get("/", (req, res) => {
    const data = Axios.get(`https://xkcd.com/${num}/info.0.json`).then((data) => {
    res.render("index", {data: data.data});
  });
});

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
