
const getemployees= "SELECT * FROM Users";

const getdeptid= "SELECT * FROM department WHERE dept_id=$1";

const getcompanyid="SELECT * FROM company WHERE company_id=$1";

const Updateadmine="UPDATE company SET company_admin = $1 WHERE company_id= $2";

const getcompany="SELECT * FROM Company";

const getdept="SELECT * FROM department";

const addUser= "INSERT INTO Users (user_uuid,first_name,middle_name,last_name,dob,blood_group,email,phone_number) VALUES ($1, $2, $3,$4,$5,$6,$7,$8)";

const Updatedept="UPDATE department SET dept_headS = $1 WHERE dept_id = $2";

const addemployee="INSERT INTO employees(employee_uuid,employee_id,user_uuid,company_uuid,department_uuid,salary,date_of_joining,employee_type_id,created_at) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9)";

const addcompany="INSERT INTO company (company_uuid,company_name,company_admin,description,contact_no,email_id, address_lane,city,state,country,pincode,created_at) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12)";

const adddept="INSERT INTO department (dept_uuid,dept_id,dept_name,description,company_uuid,dept_headS,created_at) VALUES ($1,$2,$3,$4,$5,$6,$7)";

const deptdetails="SELECT d.dept_uuid,d.dept_id,d.dept_name,d.dept_heads, c.company_name,c.description FROM department d JOIN company c ON d.company_uuid = c.company_uuid";

const details="SELECT e.employee_uuid,e.employee_id,e.user_uuid,e.company_uuid,e.department_uuid,e.employee_type_id,e.salary,e.date_of_joining,u.user_uuid,u.first_name,u.last_name,u.blood_group,u.email,u.phone_number,d.dept_uuid,d.dept_name,d.dept_id,d.dept_heads,c.company_uuid,c.company_id,c.company_name,c.company_admin,c.contact_no,c.email_id,c.city,c.state,c.country,c.created_at FROM employees e JOIN users u ON e.user_uuid=u.user_uuid JOIN department d ON e.department_uuid=d.dept_uuid JOIN company c ON e.company_uuid=c.company_uuid JOIN employeetype et ON e.employee_type_id=et.emp_type_id;"
module.exports={
    addUser,
    getemployees,
    getdeptid,
    Updatedept,
    addcompany,
    addemployee,
    adddept,
    deptdetails,
    details,
    getcompany,
    getcompanyid,
    Updateadmine,
}
