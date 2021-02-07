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
               add();
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
             departmentView();
             break;
            case ("View Roles"):
             roleView();
             break;
            default:
             console.log("Default")

        }
    })
}

function allEmployees() {
    connection.query("SELECT * FROM employee", function(error, res) {
        if (error) throw error;
        console.table(res);
    });


}

function departmentView() {
    connection.query("SELECT * FROM department", function(error, res){
        if (error) throw error;
        console.table(res);
    });
    
}

function roleView() {
    connection.query("SELECT * FROM roles", function(error, res){
        if (error) throw error;
        console.table(res);
    });
}

function add() {
    inquirer.prompt([
        {
            type:"list",
            name:"add",
            message: "Select what you would like to add below",
            choices: ["Add Department", "Add Role", "Add Employee"]
        }
    ])
    .then(function(res){
        switch(res.add){
            case "Add Department":
                console.log("add department")
                break;
            case "Add Role":
                console.log("Add Role")
                break;
            case "Add Employee":
                console.log("Add Employee")
                break;
            default:
                console.log("default")
        }
    })
}
        
    
    

