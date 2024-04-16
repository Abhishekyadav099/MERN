const express = require('express')

const app = express()

app.get('/products',(req, res)=>{
    console.log('Request Received');
    res.send('<h1>Welcome GET</h1>')
});

app.post('/products',(req, res)=>{
    res.send('<h1>Welcome Post</h1>')
});

app.patch('/products',(req, res)=>{
    res.send('<h1>Welcome Patch</h1>')
});

app.delete('/products',(req, res)=>{
    res.send('<h1>Welcome Delete</h1>')
});

app.listen(1400)