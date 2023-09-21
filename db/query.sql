-- SELECT
--   role.id AS id, 
--   role.title AS title, 
--   role.salary AS salary, 
--   department.name AS department 
-- FROM role
-- JOIN department ON role.department = department.id;

-- SELECT 
--   employee.id AS id,
--   employee.first_name AS first_name,
--   employee.last_name AS last_name,
--   role.title AS title,
--   role.department AS department,
--   role.salary AS salary,
--   employee.manager AS manager
-- FROM employee
-- JOIN role ON employee.role_id = role.id;

USE employee_db;

-- SELECT 
--   employee.id AS id,
--   employee.first_name AS first_name,
--   employee.last_name AS last_name,
--   role.title AS title,
--   department.name AS department,
--   role.salary AS salary,
--   m.first_name AS manager_first_name,
--   m.last_name AS manager_last_name
-- FROM employee
-- JOIN role ON employee.role_id = role.id
-- LEFT JOIN department ON role.department = department.id;
-- LEFT JOIN employee m ON employee.manager_id = m.id;

-- insert Into department(name)
-- VALUES (response.department);

USE employee_db;

SELECT 
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
LEFT JOIN employee m ON e.manager_id = m.id;

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