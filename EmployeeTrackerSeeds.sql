# DROP DATABASE IF EXISTS employee_trackDB;
CREATE DATABASE employee_trackDB;
USE employee_trackDB;

CREATE TABLE department (
id INT auto_increment NOT NULL,
name VARCHAR(30) NOT NULL,
PRIMARY KEY (id)
);

CREATE TABLE roles (
id INT auto_increment NOT NULL,
title VARCHAR(30) NOT NULL,
salary DECIMAL NOT NULL,
department_id INT NOT NULL,
PRIMARY KEY (id)
);

CREATE TABLE employee (
id INT auto_increment NOT NULL,
first_name VARCHAR(30) NOT NULL,
last_name VARCHAR(30) NOT NULL,
role_id INT NOT NULL,
manager_id INT,
PRIMARY KEY (id)
);

select * from department;
select * from roles;
select * from employee;

INSERT INTO department (name)
VALUES ("HR"), ("Operations"), ("Mail"), ("R&D");

INSERT INTO roles (title, salary, department_id)
VALUES ("Receptionist", 27000, 1), ("Clerk", 25000, 2), ("Engineer", 46000, 3), ("Designer", 50000, 4 ), ("Manager", 100000, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Maria", "Lopez", 3, 7);

INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Rob", "Smith", 1);

INSERT INTO employee (first_name, last_name, role_id)
VALUES ("John", "Harper", 2);

INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Bob", "Zane", 4);

INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Jenny", "Vang", 5);



