const mongoose = require("mongoose");

const connectDB = ()=>{ mongoose.connect("mongodb://0.0.0.0:27017/Sample").then(()=>{
    console.log("Connected Successfully with Mongodb")
}).catch((err)=>{
    console.log(err)
})
}

module.exports = {connectDB};