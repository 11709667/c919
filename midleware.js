const express = require('express');

var app = express(); //creating app using express

app.use(express.static(__dirname + '/public'));//Midleeware function - use()
app.get('/',(req, res) => { //
  res.send({
    name:'Sagar',
    courses: ['CAP-555' , 'CAP-60645']
  });
});
app.get('/about',(req, res) => {
  res.send("<b style='color:red'>About Sagar</b>");
});

app.listen(1500, () => {
  console.log("Server runing successfully in port no - 1500");
});
