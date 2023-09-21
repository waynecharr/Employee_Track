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
            choices: ['View all employees', 'Add employee', 'Update employee role', 'View All Roles', 'Add Role', 'View All Departments','Add Department', 'Exit'],
        },
    ]);

    switch (action) {
        case 'View all employees':
            db.query('SELECT * FROM employee', (err, results) => {
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
            db.query('SELECT * FROM role', (err, results) => {
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
            break;
        case 'Exit':
            console.log('Goodbye!');
            process.exit(0);
            break;
    }
}
  
  // Call the main menu to start the application
  mainMenu();