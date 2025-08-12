const express= require("express")
const app = express()
require("dotenv").config()
const {dbCONNECT}=require("./config/dbConfig")
const useRouter = require('./routes/userRoutes')



dbCONNECT()
app.use(express.json())
app.use("/api",useRouter)
const port = process.env.PORT || 5000;


app.use((err, req, res, next)=> {
  console.error(err.stack);

  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    success: false,
    message: err.message || 'Server Error',
    // Optional: Include stack trace in development mode only
    stack: process.env.NODE_ENV === 'production' ? null : err.stack
  });
})
// hello
app.listen(port, () => console.log(`Server running on port ${port} 🔥`))