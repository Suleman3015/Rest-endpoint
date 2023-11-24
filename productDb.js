require("dotenv").config()
const ConnectDb = require("./db/connect")
const productModel = require("./model/product")
const ProductJson = require("./product.json")

const start = async()=>{
    try {
        await ConnectDb(process.env.MONGODB_URL)
        await productModel.deleteMany()
        await productModel.create(ProductJson)
     
        console.log("success")
    } catch (error) {
        console.log(error)
    }
}
start()