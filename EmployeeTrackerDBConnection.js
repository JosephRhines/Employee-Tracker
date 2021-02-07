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
               updateEmployee();
               break;
           case "Exit":
               connection.end();
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
        // init()
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
                addDepartment()
                break;
            case "Add Role":
                addRole()
                break;
            case "Add Employee":
                addEmployee()
                break;
            default:
                console.log("default")
        }
    })
}

function addDepartment() {
    inquirer.prompt([
        {
            type:"input",
            name:"department",
            message:"What department would you like to add"
        }
    
    ])
    .then(function(response) {
        connection.query(`INSERT INTO department (name) VALUES('${response.department}');`, function(err, res) {
            if (err) throw err;
        })
    })
    // console.log("default department")
}
        
    
function addRole() {
    inquirer.prompt([
        {
            type:"input",
            name:"title",
            message:"What is the name role would you like to add"
        },

        {
           type:"number",
           name: "salary",
           message: "What is the salary for the role"

        },

        {
            type:"input",
            name: "department_id",
            message: "What is the department_id"
        }
    ])
    .then(function(response) {
        connection.query(`INSERT INTO roles (title, salary, department_id) VALUES ('${response.title}', '${response.salary}', '${response.department_id}');`,
        function(err, res) {
            if (err) throw err;
        })
    })
}

function addEmployee(){
  inquirer.prompt([
      {
          type:"input",
          name:"first_name",
          message: "What is the Employees first name"
      },

      {
          type:"input",
          name: "last_name",
          message: "What is the Employees last name"
      },

      {
          type:"number",
          name: "role_id",
          message: "What is the Employees role id"
      },

      {
          type:"number",
          name: "manager_id",
          message: "What is the manager id"
      }
  ])
  .then(function(response) {
      connection.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('${response.first_name}', '${response.last_name}', '${response.role_id}', '${response.manager_id}')`,
      function(err, res){
          if (err) throw err;
      })
  })
  
}

function updateEmployee(){
    inquirer.prompt([
        {
            type:"list",
            name:"employee",
            messsage:"Please select the employee you want to update",
            choices: ["joe", "karen", "jill", "gustaf"]
        }
    ])
    
}
