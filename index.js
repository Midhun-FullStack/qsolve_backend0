const express= require("express")
const app = express()
require("dotenv").config()
const {dbCONNECT}=require("./config/dbConfig")
dbCONNECT()
app.use(express.json())
app.get("/",(req,res)=>{
    res.send("welocme")
})
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port} 🔥`))