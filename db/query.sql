SELECT
  role.id AS id, 
  role.title AS title, 
  role.salary AS salary, 
  department.name AS department 
FROM role
JOIN department ON role.department = department.id;

SELECT 
  employee.id AS id,
  employee.first_name AS first_name,
  employee.last_name AS last_name,
  role.title AS title,
  role.department AS department,
  role.salary AS salary,
  employee.manager AS manager
FROM employee
JOIN role ON employee.role_id = role.id;

insert Into department(name)
VALUES (response.department);