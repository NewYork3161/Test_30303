const mongoose = require("mongoose");
const TheSchemaUserTable = require("./models/TheSecmaUserTables");




mongoose.connect("mongodb+srv://root:NewYork4151@cluster0.mmhyyv3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
  console.log("Mongoose is runing");

})
.catch(error=>{

console.log(error);

});



const InsertIntoSeeds = [

{
fname:"Tim",
lname:"Kim",
email:"hudsonriver4151@gmail.com",
phone:"(415) 583-1165",
image:"trkhrt.png"

}


]



const INSERTINTO = TheSchemaUserTable.insertMany(InsertIntoSeeds)
.then((res)=>{
console.log(res);
console.log("All is well");

})
.catch(error=>{

console.log(error);

});