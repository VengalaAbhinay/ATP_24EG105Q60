//Create HTTP server
import exp from 'express'
const app=exp()

//use body parser middleware
app.use(exp.json())

//create port 
const port=5000

//add port to HTTP server
app.listen(port,()=>console.log(`server listening to port ${port}...`))
const products=[]

//get all product details
app.get('/products',(req,res)=>
{
    res.json({message:"All Product Details :",payload:products})
})

//get product details by brand
app.get('/products/:brand',(req,res)=>{
    //get brand from user 
    let brandByUrl=req.params.brand
    //find index of brand
    let index=products.findIndex(item=>item.brand==brandByUrl)
    //if product not found
    if(index==-1)
    {
        res.json({message:"Product is not available"})
    }
    //send request
    res.json({message:"Product Details:",payload:products[index]})
})

//creating products
  app.post('/products',(req,res)=>{
    //get new product from client
    let newProduct=req.body
    //add new product to products
    products.push(newProduct)
    //send request
    res.json({message:"Product created"})
  })

   //update product
  app.put('/products',(req,res)=>{
    //read modified product fron client
    let modifiedProduct=req.body
    //get existing product index from the products
    let index=products.findIndex(item=>item.productId===modifiedProduct.productId)
    //if product not found
     if(index==-1)
    {
        res.json({message:"Product is not available"})
    }
    //update product by index
    products.splice(index,1,modifiedProduct)
    //send response
    res.json({message:"Product updated!"})
  })

  //Delete product by Product Id
  app.delete('/products/:productId',(req,res)=>{
    //get product id from user
    let IdOfProduct=Number(req.params.productId)
    //find index of product
    let index=products.findIndex(item=>item.productId===IdOfProduct)
    //if product not found
    if(index===-1)
    {
      return res.json({message:"product not found to delete"})
    }
    //delete product by index
    products.splice(index,1)
    //send request
    res.json({message:"product deleted"})
  })