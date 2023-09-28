import express from "express";
import { createProduct, 
  deleteProduct, 
  getAllProduct, 
  getSingleProduct, 
  showProductPage,
  showCreateProductPage,
  showsingleProductPage,
  editProduct,
  updateProduct
 } from "../controllers/productController.js";
import { createproductMulter } from "../utils/multer.js";


// init router 
const router = express.Router();


// ejs routes
router.get("/", showProductPage);
router.get("/create", showCreateProductPage);
router.get("/single/:slug", showsingleProductPage);
router.get("/product-delete/:id", deleteProduct);
router.get("/edit/:id", editProduct);
router.post("/update/:id", createproductMulter, updateProduct);



// product routes 
router.get("/product", getAllProduct);
router.get("/product/:slug", getSingleProduct);
router.delete("/product/:id", deleteProduct);
router.post("/product", createproductMulter, createProduct);


// export default router 
export default router;  

















