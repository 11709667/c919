const express = require('express');

var hbs = require('hbs');
var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs')

app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getCurrentYear', () => {
  return new Date().getFullYear()
})
app.get('/',(req, res) => { //
  res.render('home1.hbs',{
  pageTitle: 'Home',

  });
});
app.get('/about1',(req, res) => {
  res.render('about1.hbs',{
  pageTitle: 'About',

  });
});

app.listen(8000, () => {
  console.log("Server runing successfully in port no - 8000");
});
