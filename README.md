## Employee Tracker

 [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# Description

This is an employee database that uses inquirer and SQL to track employees role, salary, manager, and department. 

# Table of Contents

- [Installation](#installation)
- [Updates](#updates)
- [Contributing](#contributing)
- [Instructions](#instructions)
- [Video](#video)

# Installation 

 This program can be via github at the following link: https://github.com/waynecharr/Employee_Track.

 In order to run the program correctly, the user will need to install node.js: https://nodejs.org/en/download

 It is also recommended that you download mysql. 

# Updates

- "initial commit" has the initial commit
- "set up schema.sql database tables, added employee_db as well as department, role, and employees table" 
- "added a seeds.sql file to give the employee_db preconstructed data"
- "added a menu functionality. Able to display departments, roles, and views as well as created prompts for other functions that do nothing at present"
- "added queries to properly display employees,departments,etc. started fleshing out the ability to add new departments/roles." 
- "added query to the view employee case, view employees now displays properly"
- "added the functionality which allows you to add a role, and a new function that fetches departments"
- "added the functions that allows you to add employees, giving them a name, role, and manager"
- "added the case and functionality to give users the ability to update existing employee's role by choosing an employee and then a new role"
- "updated README. Added demonstration video." 
- "changed README file to a README.md" 

# Contributing

- Worked with tutor Julio. I had a decent start this week, but he showed me a lot of interesting functionality for how to write SQL queries. 
- Helpful MySQL queries - https://www.npmjs.com/package/mysql2


# Instructions

To start the employee tracker, it's first suggested that one log in and establish the schema tables and seed the sql.

- Open git, enter "my mysql -u root -p"
- Enter the corresponding password
- Enter "source db/schema.sql" to establish the table
- Enter "source db/seeds.sql" to seed initial data
- Enter Exit

Run NPM Start

Follow the instructions as listed. You can either view all employees, departments, and roles. Add employees, department, and roles, or update an existing employees role. 

# Video 

https://drive.google.com/file/d/1VTMyMTD-PNYujKaPX5W38v3laj4zrDIw/view