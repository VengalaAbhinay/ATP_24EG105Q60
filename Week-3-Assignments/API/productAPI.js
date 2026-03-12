import exp from 'express'
import { productModel} from '../Model/product_model.js'
import { compare } from 'bcryptjs' 
import jwt  from 'jsonwebtoken'
import { Tokenforproduct } from '../middleware/Tokenforproduct.js'
//import { Tokenforproduct } from '../middlewares/Tokenforproduct.js'
const {sign}=jwt
export const productApp=exp.Router()

//create a product
productApp.post("/products",async(req,res)=>{
    const newProduct=req.body
    const newProductDocument=new productModel(newProduct)
    const result=await newProductDocument.save()
     console.log(result)
     res.status(200).json({message:"Product Created"})
})

//login
productApp.post("/auth",async(req,res)=>{
    const {productid,productName}=req.body
    const product=await productModel.findOne({productid:productid})
    if(product==null){
      return res.status(400).json({message:"Invalid Product"})
    }
      const result=await compare(productName,product.productName)

  //   if(result==false){
  // return res.status(400).json({message:"Invalid product Name"})
  //   }
const signedToken=sign({productid:product.productid},"product",{expiresIn:"1h"})
    //send token in res
    //store token as http only cookie
    res.cookie("token",signedToken,{
      httpOnly:true,
      sameSite:"lax",
      secure:false
    })


    res.status(200).json({message:"login success",payload:product})
   }) 


//protected route
productApp.get("/products",Tokenforproduct,async(req,res)=>{
    let productList=await productModel.find()
    res.status(200).json({message:"Products",payload:productList})
})

productApp.get("/products/:productid",Tokenforproduct,async(req,res)=>{

    const uid=req.params.productid
    const productObj=await  productModel.findOne({productid:uid})
    if(!productObj){
        return res.status(404).json({message:"Product Not Found"})
    }
    res.status(200).json({message:"User",payload:productObj})
})

productApp.put("/products/:productid",async (req, res) => {
  const modifiedProduct = req.body
  const uid = req.params.productid
  const updatedProduct = await productModel.findOneAndUpdate({ productid: uid },{ $set: { ...modifiedProduct } },{ new: true, runValidators: true })
  
  if (!updatedProduct) {
    return res.status(404).json({ message: "Product Not Found" })
  }
  
  res.status(200).json({ message: "Product Modified", payload: updatedProduct })
})

productApp.delete("/products/:productid",Tokenforproduct,async(req,res)=>{
    const uid=req.params.productid
    const deletedProduct=await productModel.findOneAndDelete({productid:uid}) 
    if(!deletedProduct){
        return res.status(404).json({message:"Product Not Found"})
    }
    res.status(200).json({message:"Product Deleted",payload:deletedProduct})
})

// productApp.get('/products/:productBrand',Tokenforproduct,(req,res)=>{
//     let brandofUrl=req.body
//     let product=products.find(ele=>ele.productBrand=brandofUrl)
//     if(product==undefined){
//         return res.json({message:"Product Not Find"})
//     }
//     res.json({message:"The Product is",payload:product})
// })