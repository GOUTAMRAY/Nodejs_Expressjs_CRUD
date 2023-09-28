
import multer from "multer";

// multer setup 
const storage = multer.diskStorage({
  destination: (req, file, cb)=> {
     if(file.fieldname === "staffPhoto"){
        cb(null, "public/staff");
     }else if (file.fieldname === "customerPhoto") {
      cb(null, "public/customer");
     }else if (file.fieldname === "studentPhoto") {
      cb(null, "public/student");
     }else if (file.fieldname === "userPhoto") {
      cb(null, "public/user");
     }else if (file.fieldname === "userCv") {
      cb(null, "public/cv");
     }else if (file.fieldname === "productPhoto") {
      cb(null, "public/products");
     }
  },
  filename:(req, file,cb) =>{
    cb(null, Date.now()+ "_"+ Math.floor(Math.random() *1000000 ) + "_"  + file.originalname );
  }
});


// create customer multer 
export const createCustomerMulter = multer({storage, 
  fileFilter: (req, file, cb)=> {
    if (file.mimetype === "image/jpeg" ||
        file.mimetype === "image/jpg" ||
        file.mimetype === "image/png"  || 
        file.mimetype === "image/webp" 
     ) {
      cb(null, true);
    }else{
      cb(new Error("invalid file type"));
    }
  },
  limits:{
    fileSize: 20, 
  }

}).single("customerPhoto");

// staff middleware  
export const createStaffMulter = multer({storage}).single("staffPhoto");

// product middware
export const createproductMulter = multer({storage}).single("productPhoto");

// student middleware 
export const createStudentMulter = multer({storage}).array("studentPhoto", 5);

// user middleware 
export const createuserMulter = multer({storage}).fields([
  {
    name: "userPhoto",
    maxCount: 1,
  },
  {
    name: "userCv",
    maxCount: 1,
  },
]


);










