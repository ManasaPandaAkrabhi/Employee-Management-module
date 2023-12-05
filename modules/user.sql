-- User
CREATE TABLE Users (
    user_uuid UUID PRIMARY KEY NOT NULL,
    first_name VARCHAR(255) NOT NULL,
    middle_name VARCHAR(255),
    last_name VARCHAR(255) NOT NULL,
    dob DATE NOT NULL,
    blood_group VARCHAR(7) NOT NULL,
    email TEXT NOT NULL,
    phone_number VARCHAR(12) NOT NULL
);
-- EmployeeType
CREATE TABLE EmployeeType (
    emp_type_id SERIAL PRIMARY KEY NOT NULL,
    employee_type VARCHAR(10) NOT NULL
);
-- Company
CREATE TABLE Company (
    company_uuid UUID PRIMARY KEY NOT NULL,
    company_id SERIAL NOT NULL,
    company_name TEXT NOT NULL,
    company_admin TEXT,
    description TEXT,
    contact_no VARCHAR(12) NOT NULL,
    email_id TEXT NOT NULL,
    address_lane VARCHAR(250) NOT NULL,
    city VARCHAR(250) NOT NULL,
    state TEXT NOT NULL,
    country TEXT NOT NULL,
    pincode VARCHAR(8) NOT NULL,
    created_at TIMESTAMP
);

-- Department 
CREATE TABLE Department (
    dept_uuid UUID PRIMARY KEY NOT NULL,
    dept_id VARCHAR(8) NOT NULL,
    dept_name VARCHAR(255) NOT NULL,
    description TEXT,
    company_uuid UUID NOT NULL,
    dept_headS VARCHAR(250),
    created_at TIMESTAMP,
    FOREIGN KEY (company_uuid) REFERENCES Company(company_uuid)
);

-- Employee 
CREATE TABLE Employees (
    employee_uuid UUID PRIMARY KEY NOT NULL,
    employee_id VARCHAR(8) NOT NULL,
    user_uuid UUID ,
    company_uuid UUID,
    department_uuid UUID NOT NULL,
    salary DECIMAL(10, 2) NOT NULL,
    date_of_joining DATE NOT NULL,
    employee_type_id INT NOT NULL,
    created_at TIMESTAMP,
    FOREIGN KEY (user_uuid) REFERENCES Users(user_uuid),
    FOREIGN KEY (company_uuid) REFERENCES Company(company_uuid),
    FOREIGN KEY (department_uuid) REFERENCES Department(dept_uuid),
    FOREIGN KEY (employee_type_id) REFERENCES EmployeeType(emp_type_id)
);
