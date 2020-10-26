const spawn=require('child_process').spawn;

const express=require('express');
const bodyParser=require('body-parser');


const app=express();

app.use(bodyParser.json())

app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader("Access-Control-Allow-Methods","GET,POST,PUT,PATCH,DELETE");
    res.setHeader("Access-Control-Allow-Headers","Content-Type,Authorization");
    next();
})

app.post('',(req,res)=>{
    const url=req.body.url;
    const process=spawn('/home/jagadeesh/anaconda3/envs/tarp/bin/python',['backend/main.py',url]);
    process.stdout.on('data',data=>{
        res.json({data:data.toString()})
    })
})

app.listen(3000);
