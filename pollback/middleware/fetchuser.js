var jwt=require('jsonwebtoken');
const JWT_SECREATE="rohitsirvastavaa";

const fetchuser=(req,res,next)=>{
    const token=req.header('authtoken');
    if(!token){
        return res.status(401).json({error:"invalid token"})
    }
    try{
        const data=jwt.verify(token,JWT_SECREATE);
        req.user=data.user.id;
        console.log(data);
        next();
    }catch(error){
        return res.status(401).json({error:"fetcheer catch se erorr hi"});
    }
}


module.exports=fetchuser;