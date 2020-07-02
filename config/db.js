const mongoose = require('mongodb')
const config= require('config');

const db=config.get('mongoURI')


const connectDB=async ()=>{
    console.log('hello')
    try{
        await mongoose.connect(db,{
            useNewUrlParser:true,
            useUnifiedTopology: true
        });
        console.log('Monggose connected....')
    }
    catch(err){
     console.log(err.message)
     process.exit(1)   
    }
}
module.exports=connectDB;