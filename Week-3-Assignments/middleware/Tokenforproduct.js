import jwt from 'jsonwebtoken'
const {verify}=jwt

export function Tokenforproduct(req,res,next){
    //token verification logic
    const token=req.cookies?.token;
    //console.log(token)
    //if token is undefined (if req from unauthorized user)
    if(!token){
        return res.status(401).json({message:"plz login"})
    }
    try{
    //if token is existed
    const decodedToken=verify(token,'product');
    console.log(decodedToken);
    req.user=decodedToken;
    next();
    }catch(err){
        res.status(401).json({message:"Session expired! plz relogin"});
    }
}