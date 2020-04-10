const express = require('express');

var hbs = require('hbs');
var app = express();
const port=process.env.PORT|| 3000;

hbs.registerPartials(__dirname + '/views/partial');
app.set('view engine', 'hbs')

app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getCurrentYear', () => {
  return new Date().getFullYear()
})
app.get('/',(req, res) => { //
  res.render('home11.hbs',{
  pageTitle: 'Home',
   pic11:'https://www.squadhelp.com/story_images/visual_images/11395495.jpg',
  pic2:'https://techi.com/wp-content/uploads/2020/03/siteimage2-1024x683.jpg',
  pic12:'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
  });
});
app.get('/about11',(req, res) => {
  res.render('about11.hbs',{
  pageTitle: 'About',
  pic8:'https://www.centaurinteractive.com/wp-content/uploads/2019/08/featured-image.jpg',
  pic11:'https://www.squadhelp.com/story_images/visual_images/11395495.jpg',
  pic31:'https://blog.bestbuy.ca/wp-content/uploads/2015/12/37435iADF2A2B9844589D6.jpg',
    pic32:'https://previews.123rf.com/images/elnur/elnur1701/elnur170101594/68846635-technicien-informatique-réparant-un-ordinateur-de-bureau-pc-cassé.jpg',
    pic33:'https://sm.mashable.com/mashable_sea/photo/default/smartphone-camera_xuwj.jpg',



  });
  });
  app.get('/contect',(req, res) => {
    res.render('contect.hbs',{
    pageTitle: 'Contact Us',
    pic6:'https://steeltechbdltd.com/wp-content/uploads/2019/01/contact-us.jpg',
    pic11:'https://www.squadhelp.com/story_images/visual_images/11395495.jpg',

    });
    });
    app.get('/reach',(req, res) => {
      res.render('reach.hbs',{
      pageTitle: 'Reach US',
      pic7:'https://t3.ftcdn.net/jpg/00/28/89/50/240_F_28895040_PVaZMXHQXxul2ogB7oZ6lEkIZF9DRoug.jpg',
      pic11:'https://www.squadhelp.com/story_images/visual_images/11395495.jpg',
  Mobile: '9888972776',
  Email :'contact@techi.com',
  Address: 'Model Town ,Jalandhar ,Punajb'


      });
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
