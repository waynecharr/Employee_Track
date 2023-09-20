INSERT INTO department (name) VALUES
  ('HR'),
  ('Finance'),
  ('Marketing'),
  ('Engineering');

-- Insert data into the role table
INSERT INTO role (title, salary, department) VALUES
  ('HR Manager', 80000, 1),
  ('Finance Analyst', 75000, 2),
  ('Marketing Specialist', 70000, 3),
  ('Software Engineer', 90000, 4),
  ('Sales Manager', 85000, 3);

-- Insert data into the employee table
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
  ('Mia', 'Thompson', 1, NULL),
  ('Oliver', 'Anderson', 2, 1),
  ('Sophia', 'Martinez', 3, 1),
  ('Ethan', 'Davis', 4, NULL),
  ('Lucas', 'Miller', 5, 3);