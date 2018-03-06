var fs = require('fs');
var port = process.env.PORT || '8080';


console.log('Server is starting');
var express= require('express');
var data =fs.readFileSync('info.json');
var info = JSON.parse(data);
console.log(info.text);

var app = express();
//var ip = "160.202.36.85";
//var text = 'Hello world..!!'



//app.get('/home',function(req,res){
//  res.send('Hello world..!!');
//});

app.get('/',function(req,res){
  res.send(info.text);
});






app.listen(port,function(err){
  if(err) throw err;
  console.log('server started successfully');
});
