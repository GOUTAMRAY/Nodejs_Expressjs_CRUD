
import express from "express";
import {  createStudentdata } from "../controllers/studentController.js";
import { createStudentMulter } from "../utils/multer.js";


// init router 
const router = express.Router();


// routes 

router.post("/student",createStudentMulter, createStudentdata); 





// export default router 
export default router;





















