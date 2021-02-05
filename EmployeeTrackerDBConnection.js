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
    connection.end();
})

