const express = require("express");
const bodyParser = require("body-parser");
const app = express();

//calling Router function from routes
const userouter = require("./routes/products.js")

app.use(express.json());
app.use(bodyParser.urlencoded({extended:false}));

//using Router function 
app.use("/api/v1/products",userouter);

//importing Database to main server file
const {connectDB} = require("./data/database.js")
connectDB()

app.listen(4500,()=>{
console.log("Server is Working http://localhost:4500")
})

module.exports = {app}