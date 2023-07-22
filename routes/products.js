const express = require("express");

const {createProduct, getAllProduct, updateProduct, deleteProduct} = require("../controllers/products")

const router = express.Router();

//  http://localhost:4500/api/v1/products/

router.post("/new", createProduct);
router.get("/", getAllProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);


module.exports = router;


/* 
//create Product
app.post("/api/v1/products/new",)

//Read Product  
app.get("/api/v1/products", )

//update Product
app.put("/api/v1/products/:id",)

//Delete Product
app.delete("/api/v1/products/:id",)
*/