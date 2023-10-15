const express =equire('express');
const router =express.Router();
router.get("/users",(req,res)=>{
    res.send("User List");
})
router.get("/users/new",(req,res)=>{
res.send("User New Form")
})