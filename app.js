const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

app.use(express.static(path.join(__dirname,'./public')))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/',(req,res)=> {
    res.sendFile(path.join(__dirname,'/views/home.html'));
})

app.get('/login',(req,res)=> {
    res.sendFile(path.join(__dirname,'/views/login.html'));
    console.log(__dirname)
})

app.get('/register', (req, res) => {
	res.sendFile(path.join(__dirname, "/views/register.html"));
});

app.post('/register', (req,res) => {
	console.log (req.body);
	res.redirect('/login');
});

app.post('/login', (req,res) => {
	console.log (req.body);
	res.redirect('/');
});

app.listen(2000,()=> {
    console.log('Servidor ejecutandose en el puerto 2000')
})
