const mongoose= require("mongoose");

const policeSchema=mongoose.Schema({

    policestationname:{
        type:String,
        require:true,
    },
    policestationcode:{
        type:String,
        require:true,
    },
    stationchargeofficers:{
        type:String,
        require:true,
    },
    totalofficers:{
        type:Number,
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
        type:Number,
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
idProof:{
        type:Object,
        required:true,
    }
})
module.exports=mongoose.model('police',policeSchema)