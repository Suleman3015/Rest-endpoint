const mongoos = require("mongoose");

const connectDb = (uri) =>{
    return mongoos.connect(uri,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
}


module.exports = connectDb