const express=require('express');
const app=express();
const mongoose=require('mongoose');
const port=5000;
const cors=require('cors');
app.use(express.json());
app.use(cors());
const mongoURL="mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false";
mongoose.connect(mongoURL,()=>{
    console.log(" Successfully connected to DB");
})

app.get('/',(req,res)=>{
    res.send("hwllo ");
})


app.use('/api/auth',require('./routes/auth'));
app.use('/api/poll',require('./routes/poll'));

app.listen(5000, () => console.log('Example app is listening on port 3000.'));