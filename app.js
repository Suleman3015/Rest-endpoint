const express = require("express")
const app = express()
const product_routes = require("./routes/product");


app.use("/api/products",product_routes)
app.get("/",(req,res)=>{
    // res.status(200).json({
    //     message:"it works yaahoo"
    // })
    res.send("hello its working")

})

module.exports = app;