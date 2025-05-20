import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

var blogs = [];

app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    res.render("home.ejs");
})

app.get("/read",(req,res)=>{
    res.render("read.ejs",{blogs:blogs});
})

app.get("/write",(req,res)=>{
    res.render("write.ejs");
})

app.post("/submit",(req,res)=>{
    var name = req.body['author']
    var content = req.body['content']
    blogs.push({'title':name,'data':content})
    res.render("submit.ejs");
})

app.listen(port,()=>{
    console.log("Server is listening!");
})