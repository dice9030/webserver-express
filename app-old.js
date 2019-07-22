const http = require('http');

http.createServer( (req,res) =>{
	res.writeHead( 200 , {'Content-Type': 'application/json'})
	let salida = {
		nombre:'diego celis',
		edad:'30',
		url:req.url
	}
	//res.write('hola mundo');
	res.write(JSON.stringify(salida));
	res.end();


})
.listen(8080);

console.log('puerto 8080')