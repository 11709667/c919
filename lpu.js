const express =require('express');
const hbs =require('hbs');
var app=express();
    app.set('view engine','hbs');
 app.use(express.static(__dirname+'/public'));

app.get('/',(req,res)=>{
    res.render('home.hbs',{

        PageTitle:'Welcome To Home Page',
        pic:'https://i.ytimg.com/vi/FqVaYsxb81w/maxresdefault.jpg',
        Yr: 'THANX FOR VISIT'
    });

});

app.get('/bca',(req,res)=>{
    res.render('bca.hbs',{
        courses:'Digital markiting',
        pic:'https://getmyuni.azureedge.net/college-image/big/lovely-professional-university-lpu-jalandhar.jpg',
        info: 'Digital markting is use for creating websites and addsj'
    });

});
app.get('/mca',(req,res)=>{
    res.render('mca.hbs',{

        PageTitle2:'Welcome To Mca Page',
            pic:'https://getmyuni.azureedge.net/college-image/big/lovely-professional-university-lpu-jalandhar.jpg',
        Yr2: 'THANX FOR VISIT'

    });

});
 app.listen(4000);
