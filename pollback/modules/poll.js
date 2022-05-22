const mongoose=require('mongoose');
const PollSchema = new mongoose.Schema({
    Ques:{
        type:String,
        required:true,
        unique:true
        },
    OpA:{
        type:String,
        require:true
    },
    OpB:{
        type:String,
        required:true,
    },
    OpC:{
        type:String,
        required:true
    },
    OpD:{
        type:String,
        required:true
    },
    CA:{
        type:Number,
        default:0
    },
    CB:{
        type:Number,
        default:0
    },
    CC:{
        type:Number,
        default:0
    },
    CD:{
        type:Number,
        default:0
    },
    CreatedBy:{
        type:String,
        require:true
    }
  },{timestamps:true});

  const Poll=mongoose.model('poll',PollSchema);
  module.exports=Poll;

