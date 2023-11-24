const mongoos = require("mongoose");
// const uri = "mongodb+srv://sulemanahmed30:helmet1234@atlascluster.mpqtrcw.mongodb.net/VOGUEWOOD?retryWrites=true&w=majority"


const connectDb = (uri) =>{
    return mongoos.connect(uri,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
}


module.exports = connectDb