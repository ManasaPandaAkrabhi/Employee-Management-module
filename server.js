const express= require("express");


const employeesRoutes=require("./src/employees/routes");


const app=express();
const port=3004;

app.use(express.json());

app.get("/",(req,res)=>{
    res.send("hello world");
});

app.use('/api/employees',employeesRoutes);

app.listen(port,()=>{
    console.log(`app lisining on port ${port}`);
});

