const express =require('express');
const app=express()
app.set("view engine","jsx")
app.get('/Home',(req,res)=>{
   res.render("src\components\Home.jsx")
})

app.listen(3000)