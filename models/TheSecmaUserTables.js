const mongoose = require("mongoose");


const _TheSchemaUserTable = new mongoose.Schema({
fname:{

    type:String,required:true,
},
lname:{
    type:String,required:true,

},
speciesName:{
    type:String,required:true,

},
email:{
    type:String,required:true,

},
phone:{
    type:String,required:true,

},
image:{
    type:String,required:true,

},
post:{
    type:String,required:true,

},


});


const TheSchemaUserTable = mongoose.model("TheSchemaUserTable",_TheSchemaUserTable);

module.exports = TheSchemaUserTable;