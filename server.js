const express = require('express');
const app = express();


var hbs = require('hbs');

require('./hbs/helpers');

const port = process.env.PORT || 3000;


app.use( express.static( __dirname+ '/public' ))

// Express HBS engine
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

//helpers

app.get('/', (req, res) => {	
  res.render('home',{
	  nombre:'Diego'
	});
});

app.get('/about', (req, res) => {	
	res.render('about');
});



app.get('/data', (req, res) => {
	 res.send('hola diego')
})

 
app.listen(port,()=>{
	console.log(`puerto activo ${port}`);
});


