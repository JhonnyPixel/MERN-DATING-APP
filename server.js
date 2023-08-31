const express=require('express');
const app=express();
const cors=require('cors');
const router = require('./routes');

app.use(cors({
	origin:"http://localhost:3001"	
}));

app.use(express.json());
app.use('/api/v1/users',router)


app.get("*",(req,res)=>{
    res.status(404).json({message:"pagina non trovata"});
});

module.exports=app;