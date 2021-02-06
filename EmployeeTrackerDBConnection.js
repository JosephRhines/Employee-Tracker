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
    if (err) {throw err};
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
        switch(res.begin){
           case "View":
               views();
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
               console.log("default")
        }
    });

    
}

function views() {
    inquirer.prompt([
        {
            type: "list",
            name: "views",
            message: "Select which option you would like to view below",
            choices: ["All Employees", "View Departments", "View Roles"]
        }
    ])
    .then(function(res){
        switch(res.views){
            case "All Employees":
             allEmployees();
             break;
            case ("View Departments"):
             console.log("View Departments");
             break;
            case ("View Roles"):
             console.log("View Roles");
             break;
            default:
             console.log("Default")

        }
    })
}

function allEmployees() {
    connection.query("SELECT first_name FROM employee") 
    .then( function(res){
        console.table(res)
    })
    .catch(function(err){
        console.log("Something went wrong")
        console.error(err)
    })
}

// connection.end();
      
        
    
    

