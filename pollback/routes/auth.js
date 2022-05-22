const express=require('express');
const router=express.Router();
const User=require('../modules/user');
const fetchuser =require('../middleware/fetchuser');
const {check,validationResult}=require('express-validator');
const bcrypt=require('bcryptjs');
var jwt=require('jsonwebtoken');


const JWT_SECREATE="rohitsirvastavaa";

router.post('/login',[
    check('email','Enter a valid email').isEmail(),
    check('password','password lenght must be greate rthan 5').isLength({min:5})
],async(req,res)=>{
    const error=validationResult(req);
    if(!error.isEmpty()){
        return res.status(400).json({
            error:error.array()
        })
    }
    const {email,password}=req.body;
    try{
        let user=await User.findOne({email});
        if(!user){
            return res.status(400).json({
                error:"user not exits"
            })
        }
        const passwordCompare=await bcrypt.compare(password,user.password);
        if(!passwordCompare){
            return res.status(400).json({
                error:"not allowed "
            });
        }
        const data={
            user:{
                id:user.id
            }
        }
        const authtoken=jwt.sign(data,JWT_SECREATE);
        const success=true;
        return res.json({success,authtoken})

    }catch(error){
        return res.status(400).json({
            error:"error a gye cathc me se"
        })
    }
})


router.post('/createUser',[
    check('name','Enter a valid name min3').isLength({min:3}),
    check('email','Enter a valid email').isEmail(),
    check('password','password lenght must be greate rthan 5').isLength({min:5})
],async(req,res)=>{

    const error=validationResult(req);
    if(!error.isEmpty()){
    return res.status(400).json({
        error:error.array()
    });
    }

    let user=await User.findOne({email:req.body.email})
    if(user){
        return res.status(400).json({error:"alredy email exits"});
    }
    const salt=await bcrypt.genSaltSync(10);
    const secPass=await bcrypt.hash(req.body.password,salt);
    
   
    User.create({
        name:req.body.name,
        username:req.body.username,
        email:req.body.email,
        password:secPass
    }).then(User=>res.json(User))
    .catch(err=>{console.log(err)})

    // res.send("saved");
})


router.get('/getuser',fetchuser,async(req,res)=>{
    try{
        console.log(req.user);
        
       
        const user1=await User.findById(req.user).select("-password");
        return res.send(user1);
    }catch(error){
        return res.status(400).json({
            error:error
        })
    }
})

module.exports=router;