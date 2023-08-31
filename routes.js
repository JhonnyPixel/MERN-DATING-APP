const express=require('express');
const dataController=require('./data-controller');
const router=express.Router();

router.get('/',dataController.get,(req,res)=>{});

module.exports=router;