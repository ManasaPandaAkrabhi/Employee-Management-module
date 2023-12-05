const { Router}=require('express');

const controller= require("./controller");

const router= Router();

router.get('/',controller.getemployees);
router.post("/",controller.addUser);
router.put("/:dept_id/dept",controller.Updatedept);

router.put("/:company_id/company",controller.Updateadmine);

router.post("/company",controller.addcompany);

router.post("/emp",controller.addemployee);

router.post("/dept",controller.adddept);


router.get("/dept",controller.getdeptdetails);

router.get("/company",controller.getcompany);

router.get("/details",controller.details);



module.exports = router;