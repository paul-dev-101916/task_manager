var express = require('express');
var fs = require("fs");
var app = express();
var file = "database.sqlite";
var exists = fs.existsSync(file);
var sqlite3 = require("sqlite3").verbose();
var db = new sqlite3.Database(file);


app.configure(function () {
    app.use(
        "/", //the URL throught which you want to access to you static content
        express.static(__dirname) //where your static content is located in your filesystem
    );
});
app.listen(3000); //the port you want to use


//var stmt = db.prepare("INSERT INTO task_details VALUES (?,?,?)");
//stmt.run(3, "kecske", "kecske macska");
//stmt.finalize();

db.all("SELECT task_id, task_name, task_details FROM task_details", function(err, rows) {
    console.log(rows);
});

db.close();
