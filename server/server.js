var express=require("express");
var app=express();
var bodyparser=require('body-parser')
var fs=require('fs');


app.use(bodyparser.urlencoded({extended:false}));

app.use(express.static('client'));

app.get('/',(req,res)=>{
    res.send();
})

app.post('/addtask',(req,res)=>{
    res.redirect('/');
})


app.listen(3000,()=>{
    console.log("server is running at 3000");
})

