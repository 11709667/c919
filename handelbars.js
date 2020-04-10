const express = require('express');
const hbs = require('hbs');


var app = express(); //creating app using express

app.set('view engine', 'hbs'); // set ---key & value

app.use(express.static(__dirname + '/public'));//Midleeware function - use()
app.get('/',(req, res) => { //
  res.send({
    name:'Sagar',
    courses: ['CAP-555' , 'CAP-60645']
  });
});
app.get('/about',(req, res) => {
  res.render('about.hbs',{
  pageTitle: 'About',
  yr:new Date().getFullYear()

  });
});

app.listen(1500, () => {
  console.log("Server runing successfully in port no - 1500");
});
