const mongoose = require('mongoose');
const timeStamps = require('mongoose-timestamps');
const Schema = mongoose.Schema;


const vendorSchema= new Schema({
    email:{type:String,required:true},
    password:{type:String,required:true},
    companyName:{type:String,required:true},
    contact:{type:String,required:true},
    phone:{type:String,required:true},
    services:{type:String,required:true},
    created_At:Date,
    update_At:Date

})
vendorSchema.plugin(timeStamps,{index:true});
module.exports=mongoose.model('vendor',vendorSchema);
