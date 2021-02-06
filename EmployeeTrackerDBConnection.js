var mysql = require("mysql");
var inquirer = require("inquirer");


const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'employee_trackDB',
});

connection.connect((err) => {
    if (err) throw err;
    console.log('connected as id ' + connection.threadId);
    init()
    
})

function init() {
    inquirer.prompt([
        {
        type: "list",
        name: "begin",
        message: "Please select from the options below",
        choices: ["View", "Add", "Update", "Exit"]
        }
    ])
    .then (function(res){
        switch(res.init){
           case "View":
               console.log("View");
               break;
           case "Add":
               console.log("Add");
               break;
           case "Update":
               console.log("Update");
               break;
           case "Exit":
               console.log("Exit");
               break;
           default:
        }
    });

    
}

connection.end();

