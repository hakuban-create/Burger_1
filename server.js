var exphbs = require("express-handlebars");
var express = require("express");
var orm=require("./config/orm");



var app = express();

var PORT = process.env.PORT || 8080;
app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


app.get("/", function(req, res) {
   orm.selectWhere("*", "burgers", "deleted is null", function(data1){
    orm.selectWhere("*", "burgers", "deleted='y'", function(data2){
        console.log(data1);
        console.log(data2);
        res.render("index", { burgers:data1, deletedBurgers: data2 });
       });
   });
});


app.post("/api/burgers", function(req, res) {
    orm.insert("burgers", "name", req.body.name, function(data){
        res.json({ id: data.insertId });
    })
});


app.put("/api/burgers/:id", function(req, res) {
    console.log("updating");
    orm.update("burgers", "deleted","y", req.params.id, function(data){
        res.status(200).end();
    })
  });

app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});
