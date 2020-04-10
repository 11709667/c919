const express = require('express');

var app = express();

app.use(express.static(__dirname + '/public'));//Midleeware function - use()
app.get('/',(req, res) => { //
  res.send({
    name:'Sagar',
    courses: ['CAP-555' , 'CAP-60645']
  });
});
app.get('/intro',(req, res)=>{
res.render('intro.hbs',{
  pic1:'https://pro-essay-writer.com/static/img/regular/Introduction-essay.jpg',

Name: 'Sagar Banger',
Regno: 11709667,
adr: 'V.P.O Ucha Pind',
});
});
app.get('/hobbies',(req, res)=>{
res.render('hobbies.hbs',{
Hob1: 'Listening musing',
pic1:'https://infocaptain.com/wp-content/uploads/2017/11/listening-music-.jpg',
Hob2: 'Playing football',
pic2:'https://i.ytimg.com/vi/fIZR5Ib1p_w/maxresdefault.jpg',
Hob3: 'Reading books',
pic3:'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F24%2F2018%2F12%2Fgettyimages-919870926-2000.jpg&q=85',

});
});
app.get('/academic',(req, res)=>{
res.render('academic.hbs',{
    r:'Acadmic information',
    Name:'A+',
Cgpa: 'B+',
Repair:'A',
Class: 'o+'
});
});
app.get('/personal',(req, res)=>{
res.render('personal.hbs',{

Contactno: 9888925692,
Fathername:'Paramjeet lal'
});
});

app.listen(1700, () => {
  console.log("Server runing successfully in port no - 1700");
});
