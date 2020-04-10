const express = require('express');

var hbs = require('hbs');
const fs =  require ('fs');
var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
app.use((req, res, next) =>{
var now = new Date().toString();
var msg = `${now}: ${req.method}: ${req.url}`;
console.log(msg);

fs.appendFile('server.log', msg + '\n', (err) => {
if (err) {
console.log('unable to access');
}
});
next();
});
app.use((req, res, next) =>{
  res.render('maintenance.hbs')
})

app.use(express.static(__dirname + 'public'));

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
