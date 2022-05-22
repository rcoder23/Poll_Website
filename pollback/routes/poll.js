const express=require('express');
const router=express.Router();
const Poll=require('../modules/poll');
const fetchuser =require('../middleware/fetchuser'); //req.user
router.post('/createPoll',fetchuser,async(req,res)=>{
    const{ques,opA,opB,opC,opD}=req.body;
    
    let user=await Poll.findOne({Ques:req.body.ques})
    if(user){
        return res.status(400).json({error:"Questions alredy present"});
    }
    
    Poll.create({
        Ques:ques,
        OpA:opA,
        OpB:opB,
        OpC:opC,
        OpD:opD,
        CreatedBy:req.user
    }).then(Poll=>res.json(Poll))
    .catch(err=>{console.log(err)})


})


router.post('/getAll',fetchuser,async(req,res)=>{
    try{
        const user1=await Poll.find({_v:0});
        return res.send(user1);
    }catch(error){
        return res.status(400).json({
            error:error
        })
    }
})

router.post('/voted',async(req,res)=>{
    try{
        console.log(req.body._id);
        let user1
        let temp=await Poll.findOne({_id:req.body._id});
        if(req.body.changeValue=='OpA'){
          
          user1=await Poll.findOneAndUpdate({_id:req.body._id},{'CA':temp.CA+1});
        }
        else if(req.body.changeValue=='OpB'){
            user1=await Poll.findOneAndUpdate({_id:req.body._id},{'CB':temp.CB+1});
          }
        else if(req.body.changeValue=='OpC'){
            user1=await Poll.findOneAndUpdate({_id:req.body._id},{'CC':temp.CC+1});
          }
        else  if(req.body.changeValue=='OpD'){
            user1=await Poll.findOneAndUpdate({_id:req.body._id},{'CD':temp.CD+1});
          }
        return res.send(user1);
    }catch(error){
        return res.status(400).json({
            error:error
        })
    }
})

module.exports=router;