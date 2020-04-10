const express = require('express');

var app = express(); //creating app using express

app.get('/',(req, res) => { //creating handler req-request res-response
  res.send({
    name:'Sagar',
    courses: ['CAP-555' , 'CAP-60645']
  });
});
app.get('/about',(req, res) => { //creating handler req-request res-response
  res.send("<b style='color:red'>About Sagar</b>");
});

app.listen(1500);
