-- Preset Department Data
INSERT INTO department (name) VALUES
  ('Engineering'),
  ('Finance'),
  ('Legal'),
  ('Sales');

-- Preset list of Roles, their salaries, and departments
INSERT INTO role (title, salary, department) VALUES
  ('Lawyer', 90000, 3),
  ('Finance Analyst', 75000, 2),
  ('Marketing Specialist', 70000, 4),
  ('Software Engineer', 120000, 1),
  ('Sales Manager', 90000, 4),
  ('Sales Rep', 65000, 4),
  ('Accountant', 90000, 2),
  ('Paralegal', 50000, 3);

-- Preset employees, their first and last names and their roles as well as managers
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
  ('Mia', 'Thompson', 6, NULL),
  ('Oliver', 'Anderson', 7, 1),
  ('Ethan', 'Davis', 1, NULL),
  ('Lucas', 'Miller', 8, 3),
  ('Sophia', 'Mills', 4, NULL),
  ('Sophia', 'Martinez', 4, 5),
  ('Aiden', 'Harris', 7, NULL),
  ('Harper', 'Jackson', 2, 7);
