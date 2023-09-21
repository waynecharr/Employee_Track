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

function fetchDepartments() {
  return new Promise((resolve, reject) => {
    db.query('SELECT id, name FROM department', (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
}

function fetchRoles() {
  return new Promise((resolve, reject) => {
    db.query('SELECT id, title FROM role', (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
}

function fetchEmployees() {
  return new Promise((resolve, reject) => {
    db.query('SELECT id, first_name, last_name FROM employee', (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
}

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
    case 'Add employee':
        const employees = await fetchEmployees();
        const roles = await fetchRoles();
        
        const eResponse = await inquirer.prompt([
          {
            type: 'input',
            name: 'first_name',
            message: 'Enter the employee\'s first name:',
          },
          {
            type: 'input',
            name: 'last_name',
            message: 'Enter the employee\'s last name:',
          },
          {
            type: 'list',
            name: 'role_id',
            message: 'Select the employee\'s role:',
            choices: roles.map((role) => ({
              name: role.title,
              value: role.id,
            })),
          },
          {
            type: 'list',
            name: 'manager_id',
            message: 'Select the employee\'s manager (or choose "null" for no manager):',
            choices: [{ name: 'null', value: null }, ...employees.map((employee) => ({
              name: `${employee.first_name} ${employee.last_name}`,
              value: employee.id,
            }))]
          },
        ]);
        
        const addEmployee = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?);`
        
        db.query(addEmployee, [eResponse.first_name, eResponse.last_name, eResponse.role_id, eResponse.manager_id], (err, results) => {
          if (err) {
            console.error('Error adding employee:', err);
          } else {
            console.table(results);
          }
          mainMenu();
        });
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
      const departments = await fetchDepartments();
      const rResponse = await inquirer.prompt([
        {
          type: 'input',
          name: 'role',
          message: 'Add the name of the Role:',
        },
        {
          type: 'input',
          name: 'salary',
          message: 'Add the slary for the role:',
        },
        {
          type: 'list',
          name: 'department',
          message: 'Select the department for the role:',
          choices: departments.map((dept) => ({
            name: dept.name,
            value: dept.id,
          })),
        },
      ]);
      const addRole = `insert Into role(title, salary, department)
          VALUES (?, ?, ?);`
      db.query(addRole, [rResponse.role, rResponse.salary, rResponse.department], (err, results) => {
        if (err) {
          console.error('Not a valid role title', err);
        } else {
          console.table(results);
        }
        mainMenu();
      });
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
      const dResponse = await inquirer.prompt([
        {
          type: 'input',
          name: 'department',
          message: 'Add the name of your department:',
        },
      ]);
      const addDepartment = `insert Into department(name)
          VALUES (?);`
      db.query(addDepartment, [dResponse.department], (err, results) => {
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

