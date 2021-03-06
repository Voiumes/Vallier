const express = require("express"),
    app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", function (req, res) {
    res.render("index");
});

const port = process.env.PORT || 3000

app.listen(port)