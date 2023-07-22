const Product = require("../model/productModel.js");

//create Product

const createProduct = async (req, res)=>{
    const newProduct = await Product.create(req.body);
    res.status(200).json({
        success:true,
        newProduct
    })
}

//Read Product

const getAllProduct = async(req,res)=>{
    const products = await Product.find({})

    res.status(200).json({
        success:true,
        products
    })
}

//update Product

const updateProduct = async(req,res)=>{
    let product = await Product.findById(req.params.id);

    if(!product){
        return res.status(500).json({
            success:false,
            message:"product Not found"
        })
    }

    product = await Product.findByIdAndUpdate(req.params.id,req.body,
        {new:true,useFindAndModify:true,reunValidators:true})

        res.status(200).json({
            success:true,
            message:"Product Updated Successfully",
            product
        })
}

//Delete Product

const deleteProduct = async(req,res)=>{

    const product = await Product.findById(req.params.id);

    if(!product){
        return res.status(500).json({
            success:false,
            message:"product Not found"
        })
    }

    await product.deleteOne();

    res.status(200).json({
        success:true,
        message:"Product deleted successfully"
    })
}

module.exports = {
    createProduct, 
    getAllProduct, 
    updateProduct, 
    deleteProduct
};