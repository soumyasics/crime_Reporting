const mongoose= require("mongoose");

const userSchema=mongoose.Schema({

    policestationname:{
        type:String,
        require:true,
    },
    Policestationcode:{
        type:String,
        require:true,
    },
    stationchargeofficers:{
        type:String,
        require:true,
    },
    totalofficers:{
        type:String,
        require:true,
    },
    password:{
        type:String,
        require:true,
    },
    address:{
        type:String,
        require:true,
    },
    contact:{
        type:String,
        require:true,
    },
    district:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        unique:true,
        required:true,
    },
    confirmpassword:{
        type:String,
        require:true,
    }
})
module.exports=mongoose.model('police',userSchema)