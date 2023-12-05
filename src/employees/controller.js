const pool= require("../../config/db");

const uui= require("../../config/uuid");

const tstamp=require("../../config/timestamp");

const query= require("./queries");

//const tiemstampp = require("../../config/timestamp");

const getemployees = (req,res)=>{
    pool.query(query.getemployees,(err,results)=>{
        if(err){
            throw err;
        }
        res.status(200).json(results.rows);
    });
};

const getdeptdetails = (req,res)=>{
    pool.query(query.deptdetails,(err,results)=>{
        if(err){
            throw err;
        }
        res.status(200).json(results.rows);
    });
};

const details = (req,res)=>{
    pool.query(query.details,(err,results)=>{
        if(err){
            throw err;
        }
        res.status(200).json(results.rows);
    });
};

const getcompany = (req,res)=>{
    pool.query(query.getcompany,(err,results)=>{
        if(err){
            throw err;
        }
        res.status(200).json(results.rows);
    });
};

const addUser= (req,res)=>{
    const {first_name,middle_name,last_name,dob,blood_group,email,phone_number}=req.body;


        pool.query(query.addUser,[uui.uuid4,first_name,middle_name,last_name,dob,blood_group,email,phone_number],(err,result)=>{
            if(err) throw err;
            res.status(201).send("user added successfully!");
        });
};

const Updatedept=(req,res)=>{
    const id=parseInt(req.params.dept_id);

    const {dept_heads}=req.body;

    pool.query(query.getdeptid,[id],(err,result)=>{
        const noStudentFound= !result.rows.length;
        if(noStudentFound)
            res.send("Department Does not exist");

        pool.query(query.Updatedept,[dept_heads,id],(err,result)=>{
            if(err) throw er;

            res.status(200).send("Department-head update successfully");
        })
    });
};

const Updateadmine=(req,res)=>{
    const id=parseInt(req.params.company_id);

    const {company_admin}=req.body;

    pool.query(query.getcompanyid,[id],(err,result)=>{
        const noStudentFound= !result.rows.length;
        if(noStudentFound)
            res.send("Company does not exits");

        pool.query(query.Updateadmine,[company_admin,id],(err,result)=>{
            if(err) throw er;

            res.status(200).send("Company admin update successfully!");
        })
    });
};

const addcompany= (req,res)=>{
    const {company_name,company_admin,description,contact_no,email_id, address_lane,city,state,country,pincode}=req.body;

        pool.query(query.addcompany,[uui.uuid4,company_name,company_admin,description,contact_no,email_id, address_lane,city,state,country,pincode,tstamp.date],(err,result)=>{
            if(err) throw err;
            res.status(201).send("company added successfully!");
        });
    }

    const addemployee= (req,res)=>{
        const {employee_id,user_uuid,company_uuid,department_uuid,salary,date_of_joining,employee_type_id}=req.body;
    
    
            pool.query(query.addemployee,[uui.uuid4,employee_id,user_uuid,company_uuid,department_uuid,salary,date_of_joining,employee_type_id,tstamp.date],(err,result)=>{
                if(err) throw err;
                res.status(201).send("employee added successfully!");
            });
        };

    const adddept=(req,res)=>{
        const {dept_id,dept_name,description,company_uuid,dept_headS}=req.body;


        pool.query(query.adddept,[uui.uuid4,dept_id,dept_name,description,company_uuid,dept_headS,tstamp.date],(err,result)=>{
            if(err) throw err;
            res.status(201).send("department added successfully!");
        });
    };

module.exports={
    addUser,
    getemployees,
    Updatedept,
    addcompany,
    addemployee,
    adddept,
    getdeptdetails,
    details,
    getcompany,
    Updateadmine,
}