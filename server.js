const express = require('express');

var app = express(); //creating app using express

app.get('/',(req, res) => { //creating handler req-request res-response
  res.send('Hello Express...!!!');
});

app.listen(3000);
