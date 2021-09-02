const sqlite=require('sqlite3').verbose();
const db=new sqlite.Database('output.db');
const express=require('express');
const app=express();


app.use('/',express.static('./public'));
app.use(express.json());

app.post('/request',async (req,res)=>{
    let {input}=req.body;
    if(!input){
        res.json({err:"Input is empty"})
        return ;
    }
    db.all(input,[],(err,raws)=>{
        if(err){
            res.json({'Error':err.message});
            return ;
        }
        res.json(raws);
    })



})



app.listen(80);