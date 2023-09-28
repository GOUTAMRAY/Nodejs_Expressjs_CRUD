
import express from "express";
import { createStaff} from "../controllers/staffController.js";
import { createStaffMulter } from "../utils/multer.js";


// init router 
const router = express.Router();


// staff routes 

router.post("/staff",createStaffMulter, createStaff ); 



// export default router 
export default router;















