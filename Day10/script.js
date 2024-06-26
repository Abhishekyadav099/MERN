const express = require('express');
// const fs = require("fs");
const fsPromises = require("fs/promises");

const app = express();


app.use(express.json());

app.use((req, res, next)=>{
    const time = new Date().toLocaleString();
    fsPromises.appendFile('./log.txt', req.url+'\t'+time+'\n');
    next();
})

app.get('/api/products', async (req, res) => {
    // const data = fs.readFileSync('./data.json', "utf8");
    const data = await fsPromises.readFile('./data.json', "utf8");
    const arr = JSON.parse(data).products;
    res.json(
        {
            status: 'success',
            results: arr.length,
            data: {
                products: arr
            }
        });

});

app.post('/api/products', async (req, res) => {
    // console.log(Object.keys(req));
    const data = req.body;
    data.id = 121;
    console.log(data);

    const db = await fsPromises.readFile("./data.json", 'utf-8');
    const arr = JSON.parse(db);
    const len = arr.length;
    const newProduct = data;
    if (len == 0) {

        newProduct.id = 1;
        // arr.push(newProduct);
        // console.log(arr);
        // fsPromises.writeFile("./data.json", JSON.stringify(arr));
    }
    else {
        const newProduct = data;
        newProduct.id = (arr[len - 1].id) + 1;

    }
    arr.push(newProduct);
    fsPromises.writeFile("./data.json", JSON.stringify(arr));

    res.json({
        status: 'success',
        results: 1,
        data: {
            newProduct: newProduct,
        }
    })
});

app.put('/api/products/:id', async (req, res)=>{
    const arr = JSON.parse( await fsPromises.readFile("./data.json", "|utf8"));
    res.send("Work in progress..");
    const reqId =req.params.id;
    const data = req.body;
    data.id = reqId;
    const newArr = arr.map((elem)=>{
        if(elem.id==reqId)return data;
        else return elem;
        
    });

})

app.listen(1400);

