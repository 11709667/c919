const express = require('express');

var app = express(); //creating app using express

app.get('/',(req, res) => { //creating handler req-request res-response
  res.send('<h1>Hello Express...!!!</h1>');
});

app.listen(1400);
