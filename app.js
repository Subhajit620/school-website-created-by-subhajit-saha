

const express = require ("express");
const path= require ("path");
const app= express();
const publicPath=path.join(__dirname,"public")

app.use(express.static(publicPath));

app.get("/",(req,res)=>{
    response.sendFile(`${publicPath}/index.html`)
})

app.get("/about",(req,res)=>{
    response.sendFile(`${publicPath}/about.html`)
})

app.get("/login",(req,res)=>{
    response.sendFile(`${publicPath}/login.html`)
})

app.get("/register",(req,res)=>{
    response.sendFile(`${publicPath}/register.html`)
})
console.log(__dirname);
app.listen(4000);