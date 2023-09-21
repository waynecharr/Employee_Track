-- Preset Department Data
INSERT INTO department (name, id) VALUES
  ('Engineering', 1),
  ('Finance', 2),
  ('Legal', 3),
  ('Sales', 4);

-- Preset list of Roles, their salaries, and departments
INSERT INTO role (title, salary, department) VALUES
  ('Human Resource Manager', 80000, 3),
  ('Finance Analyst', 75000, 2),
  ('Marketing Specialist', 70000, 4),
  ('Software Engineer', 90000, 1),
  ('Sales Manager', 85000, 4);

-- Preset employees, their first and last names and their roles as well as managers
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
  ('Mia', 'Thompson', 1, NULL),
  ('Oliver', 'Anderson', 2, 1),
  ('Sophia', 'Martinez', 3, 1),
  ('Ethan', 'Davis', 4, NULL),
  ('Lucas', 'Miller', 5, 3);