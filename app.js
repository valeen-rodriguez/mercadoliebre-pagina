const express = require('express');
const app = express();
const path = require('path');

app.get('/',(req,res)=> {
    res.sendFile(path.join(__dirname,'/views/home.html'));
})

app.get('/register',(req,res)=> {
    res.sendFile(path.join(__dirname,'/views/register.html'));
    console.log(__dirname)
})

app.get('/login',(req,res)=> {
    res.sendFile(path.join(__dirname,'/views/login.html'));
    console.log(__dirname)
})

app.use(express.static('public'));

app.listen(2000,()=> {
    console.log('Servidor ejecutandose en el puerto 2000')
})
