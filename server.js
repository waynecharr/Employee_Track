const express = require('express');
// Import and require mysql2
const mysql = require('mysql2');
const inquirer = require('inquirer');
const fs = require('fs');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: '46ToffeeKitty654!',
    database: 'employee_db'
  },
  console.log(`Connected to the employee_db database.`)
);


async function mainMenu() {
  const { action } = await inquirer.prompt([
    {
      type: 'list',
      name: 'action',
      message: 'What would you like to do?',
      choices: ['View all employees', 'Add employee', 'Update employee role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department', 'Exit'],
    },
  ]);

  switch (action) {
    case 'View all employees':
      const queryEmployees = `SELECT 
          e.id AS id,
          e.first_name AS first_name,
          e.last_name AS last_name,
          r.title AS title,
          d.name AS department,
          r.salary AS salary,
          CONCAT(m.first_name, ' ', m.last_name) AS manager_name
        FROM employee e
        JOIN role r ON e.role_id = r.id
        LEFT JOIN department d ON r.department = d.id
        LEFT JOIN employee m ON e.manager_id = m.id;`
      db.query(queryEmployees, (err, results) => {
        if (err) {
          console.error('Error retrieving employees:', err);
        } else {
          console.table(results);
        }
        mainMenu();
      });
      break;
    case 'Add Employee':
      break;
    case 'Update Employee Role':
      break;
    case 'View All Roles':
      const queryRoles = `SELECT
          r.id AS id, 
          r.title AS title, 
          r.salary AS salary, 
          d.name AS department 
          FROM role r
          JOIN department d ON r.department = d.id;`
      db.query(queryRoles, (err, results) => {
        if (err) {
          console.error('Error retrieving employees:', err);
        } else {
          console.table(results);
        }
        mainMenu();
      });
      break;
    case 'Add Role':
      break;
    case 'View All Departments':
      db.query('SELECT * FROM department', (err, results) => {
        if (err) {
          console.error('Error retrieving employees:', err);
        } else {
          console.table(results);
        }
        mainMenu();
      });
      break;
    case 'Add Department':
      const response = await inquirer.prompt([
        {
          type: 'input',
          name: 'department',
          message: 'Add the name of your department:',
        },
      ]);
      const addName = `insert Into department(name)
          VALUES (?);`
      db.query(addName, [response.department], (err, results) => {
        if (err) {
          console.error('Not a valid department name', err);
        } else {
          console.table(results);
        }
        mainMenu();
      });
      break;
    case 'Exit':
      console.log('Goodbye!');
      process.exit(0);
      break;
  }
}

// Call the main menu to start the application
mainMenu();