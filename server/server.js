var express=require("express");
var app=express();
var bodyparser=require('body-parser')
var fs=require('fs');
const { exit } = require("process");


app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));

app.use(express.static('client'));


app.post('/addtask',(req,res)=>{
    // fs.appendFileSync('jatin.txt',JSON.stringify(req.body),(err,item)=>{
    //     if(err) throw err;
    //     console.log("writing done");
    // })   
    res.send(exit);
})





app.listen(3000,()=>{
    console.log("server is running at 3000");
})



