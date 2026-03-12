import { Schema,model } from "mongoose";
const productSchema=new Schema({
    productid:{
        type:Number,
        required:[true,"Product Id is required"],
    },
    productName:{
        type:String,
        required:[true,"Product Name is required"],
    },
    productPrice:{
        type:Number,
        required:[true,"Price is required"],
        minPrice:[10000,"Min price must be 10000"],
        maxPrice:[50000,"Max price must be 50000"],
    },
    productBrand:{
        type:String,
        required:[true,"Brand is required"],
    }
},{
    versionKey:false,
    timestamps:true,
},);
//Generating product model
export const productModel=model('product',productSchema)