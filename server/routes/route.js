var express=require('express')
var app=express()

var myconsolelog=function(req,res,next){
    console.log("I am a middleware");
    next();
}


var servertime=function(req,res,next){
    req.requestTime=Date.now()
    next()
}

app.use(servertime);


app.get('/',(req,res)=>{
   res.send("Hello world"+" and time is:"+ req.requestTime);
   console.log("i am /");
})

app.listen(3000,()=>{
    console.log("the server is running at port 3000"); 
})

