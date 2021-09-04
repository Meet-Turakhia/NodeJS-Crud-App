require("./models/db");

const express = require("express");
const Handlebars = require('handlebars')
const path = require("path");
const exphbs = require("express-handlebars"); 
const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access')
const bodyparser = require("body-parser");

const employeeController = require("./controllers/employeeController");
const { dirname } = require("path");

var app = express();

app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(bodyparser.json());
app.set("views", path.join(__dirname, "/views/"));
app.engine("hbs", exphbs({ extname: "hbs", defaultLayout: "mainlayout", layoutsDir: __dirname + "/views/layouts/", handlebars: allowInsecurePrototypeAccess(Handlebars)}));
app.set("view engine", "hbs");

app.listen(3000, () => {
    console.log("Express server started at port: 3000");
})

app.use("/employee", employeeController);