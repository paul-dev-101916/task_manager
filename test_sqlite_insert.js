var fs = require("fs");
var file = "database.sqlite";
var exists = fs.existsSync(file);
var sqlite3 = require("sqlite3").verbose();
var db = new sqlite3.Database(file);
var stmt = db.prepare("INSERT INTO task_details VALUES (?,?,?)");
stmt.run(3, "kecske", "kecske macska");
stmt.finalize();

db.each("SELECT task_id, task_name, task_details FROM task_details", function(err, row) {
    console.log(row.task_id + "|" + row.task_name + "|" + row.task_details);
});

db.close();
