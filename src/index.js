const express = require("express");
const userRouter = require("./routes/userRoutes");
const app = express();

const mongoose = require("mongoose");

app.use(express.json());
app.use("/users", userRouter);

app.get("/", (req,res)=>{
    res.send("Hello");
});

mongoose.connect("mongodb+srv://admin:admin@cluster0.qankl1i.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    app.listen( 5000, ()=>{
        console.log("Server started on port no.5000");
    });
})
.catch((error)=>{
    console.log(error);
})
