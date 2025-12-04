import express from "express"
import axios from "axios"

const app =express();
const port= 3000;
const apiUrl="https://v2.jokeapi.dev/joke/Any";

// app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/",async(req,res)=>{
    try {
        const response=await axios.get(apiUrl);
        const result=response.data;
        console.log(result.type)
        res.render("index.ejs",{joke:result});
    } catch (error) {
        // console.log(error)
        const statusCode = error.response?.status || 500;
        res.status(statusCode).send(error.message);

    }
})







app.listen(port,()=>{
    console.log(`srever is running on port ${port}`);
})