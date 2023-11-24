require("dotenv").config()

const http = require("http")
const App =require("./app");
const port = process.env.PORT || 3000;
const connectDb = require("./db/connect")

// const server = http.createServer(App);
// server.listen(port)

const Start = async() =>{
    try{
        await connectDb(process.env.MONGODB_URL)
        App.listen(port,() => {
            console.log(`${port} is connected`)
        })

    }catch(error){
        console.log(error)

    }

}

Start()