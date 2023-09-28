
import express from "express";
import { createUser,  } from "../controllers/userController.js";
import { createuserMulter } from "../utils/multer.js";


// init router 
const router = express.Router();



// routes 

router.post("/user",createuserMulter, createUser); 



// export default router 
export default router;














