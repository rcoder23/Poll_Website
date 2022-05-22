const mongoose=require('mongoose');
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        },
    username:{
        type:String,
        require:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true

    }
  },{timestamps:true});

  const User=mongoose.model('user',userSchema);
  module.exports=User;

