
import { createProductSlug, getRandomUniqueID } from "../helpers/helper.js";
import fs from "fs"; 
  

/***
 * 
 * get all product 
 */
export const getAllProduct = (req, res)=> {

  //get all product
  const productData = JSON.parse(fs.readFileSync("db/product.json").toString());

  if(productData.length === 0){
    return res.status(404).json({message : "Product not found "});
  };

  res.status(200).json({products : productData});

};

/***
 * 
 * get single  product 
 */
export const getSingleProduct = (req, res)=> {
   const {slug } = req.params;

  //get all product
  const productData = JSON.parse(fs.readFileSync("db/product.json").toString());

  const singleProduct = productData.find(data => data.slug === slug);

 if(!singleProduct){
  return res.status(400).json({message : "Single Product not found"});
 }

 res.status(200).json( singleProduct);

};

// create product 
export const createProduct = (req, res)=> {
  const {name, regularprice, saleprice, stock} = req.body;

 if(!name || !regularprice){
    return res.status(400).json({message : "Product name & regular price is required"});
 }


  const productData = JSON.parse(fs.readFileSync("db/product.json").toString());

 // product name check 
  if(productData.some(data => data.slug === createProductSlug(name))) {
    return res.status(400).json({message : "Product Already Exists"});
  };

  const product = {
    id: getRandomUniqueID(),
    name, 
    slug : createProductSlug(name), 
    regularprice,
    saleprice, 
    stock ,
    photo : req.file.filename 
  };

 productData.push(product); 

 fs.writeFileSync("db/product.json", JSON.stringify(productData));

  res.redirect("/")
};


/***
 * 
 *  delete single  product 
 */
export const deleteProduct = (req, res)=> {
  const {id } = req.params;

 const productData = JSON.parse(fs.readFileSync("db/product.json").toString());

const updatedData = productData.filter(data => data.id !== id);

fs.writeFileSync("db/product.json", JSON.stringify(updatedData));

res.redirect("/");

};

// show product page ejs 
export const showProductPage = (req, res) => {
   //get all product
   const productData = JSON.parse(fs.readFileSync("db/product.json").toString());

   res.render("product", { products : productData });
};

// create product page 
export const showCreateProductPage = (req, res) => {
   res.render("create");
};

/***
 * 
 * create single product page 
 */
export const showsingleProductPage = (req, res) => {
  const {slug} = req.params;

   //get all product
   const productData = JSON.parse(fs.readFileSync("db/product.json").toString());

   const singleData = productData.find(data => data.slug === slug);

   res.render("singleshow", { product: singleData });
};

/***
 * 
 * edit single product 
 */ 
export const editProduct = (req, res) => {
  const { id } = req.params;

   //get all product
   const productData = JSON.parse(fs.readFileSync("db/product.json").toString());

   const editsingleData = productData.find(data => data.id === id);

   res.render("edit", { product: editsingleData });
};


/***
 * 
 *  update single product data
 */
export const updateProduct =(req, res) => {
   const { id } =req.params; 
   const {name, regularprice, saleprice, stock} = req.body;

    //get all product
    const productData = JSON.parse(fs.readFileSync("db/product.json").toString());
   
    // photo check 
    let photo_name = productData[productData.findIndex((data) => data.id === id)].photo;

    if (req?.file?.filename) {
      photo_name = req.file.filename;
    }

    productData[productData.findIndex((data) => data.id === id)] = {
      id : id,
      slug: createProductSlug(name),
      name,
      regularprice,
      saleprice,
      stock,
      photo: photo_name,
    }
    fs.writeFileSync("db/product.json", JSON.stringify(productData));

    res.redirect("/");
}