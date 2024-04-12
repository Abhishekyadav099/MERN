// const fs = require('node:fs');

// const data = fs.readFileSync('./myReadMe.txt');
// console.log(data);
// console.log(data.toScring());

// const fs = require('node:fs');

// const data = fs.readFileSync('./myReadMe.txt',{encoding: 'utf-8'});
// console.log(data);
// console.log(data.toScring());

// const fs = require('fs');
// fs.writeFileSync('./logs.txt',"10th April 2024: Day 7");

// const fs = require('fs');
// console.log('Start');
// const data = fs.readFileSync('./myReadMe.txt',{encoding: 'utf-8'});
// console.log(data);
// console.log('End');

//  Primises in File System
// const fsPromises = require('fs/promises');
// console.log('Start');
// const pr = fsPromises.readFile('./myReadMe.txt',{encoding: 'utf8'});
// console.log(pr);
// pr.then((res)=>{
//     console.log(res);
// })
// console.log('End');


//  Callback in Fle System
// const fs = require('fs');

// fs.readFile('./myReadMe.txt', {encoding: "utf8"},(err, data)=>{
//     console.log(data);
// });

// http://localhost:1400/
// const http = require('http');

// const app = http.createServer((req, res) => {
//     console.log('Recived');
// console.log(req.url);
// res.end('<h3>Adarshh3>');
// });
// app.listen(1400);


// const http = require('http');

// const htmlTemplate = `
// <!DOCTYPE HTML>
// <html>
//     <head>
//     </head>
//     <body>
//         __PRODUCTS__CARDS__
//     </body>
// </html>
// `

// const page = '<h1>Welcome</h1>'

// const server = http.createServer((req, res) => {
//     console.log('Request Recived!');
//     console.log(req.url);
//     res.write(200,{'content-type': 'text/html', })
//     res.end(htmlTemplate);
// });

// server.listen(1400, ()=>{
//     console.log('...............Server Start........');
// })



// const http = require('http');

// const page = '<h1>Welcome</h1>';

// const htmlTemplate = `
// <!DOCTYPE html>
// <html>
//     <head>
//         <title>Bloger's World</title>
//     </head>
//     <body>
//         PRODUCTS_CARDS
//     </body>
// </html>
// `


// const app = http.createServer((req, res) => {
//     console.log('Request recived');
//     console.log(req.url); 
//     res.setHeader('Content-Type', 'text/html');

//     res.end(htmlTemplate);
// });
// app.listen(3000, () =>{
//     console.log('................ Server Start ....................');
// });


//.........................mini project.................................

// const http = require('http');
// const fs = require('fs');

// const data = fs.readFileSync('./data.json','utf-8');
// const dataObj = JSON.parse(data);
// const product = dataObj.products
// console.log(dataObj);
// console.log(data);

// const page = '<h1>Welcome</h1>';

// const htmlTemplate = `
// <!DOCTYPE html>
// <html>
//     <head>
//         <title>Bloger's World</title>
//         <style>
//         .product-card{
//             max-width; 500px;
//             margin: 20px auto;
//             border: 30px double break;
//             border: 30px double break;

//         }
//         </style?
//     </head>
//     <body>
//         PRODUCTS_CARDS
//     </body>
// </html>
// `

// const cardTemplate = `
//     <div class="card">
//         <h1>_TITLE_</h1>
//         <h2>_DESCRIPTION_</h2>

//         <h2>_PRICE_</h2>
//     </div>
// `

// const card1 = cardTemplate
//     .replace('_TITLE_', products[0].title)
//     .replace('_DESCRIPTION_',products[0].description )
//     .replace('_PRICE_', '60000')

// const card2 = cardTemplate
//     .replace('_TITLE_', products[1].title)
//     .replace('_DESCRIPTION_', products[1].description)
//     .replace('_PRICE_', '100000')


//  const card3 = cardTemplate
//     .replace('_TITLE_', products[2].title)
//     .replace('_DESCRIPTION_', products[2].description)
//     .replace('_PRICE_', '100000')

// const allCards = card1 + card2 + card3;

// const page = htmlTemplate.replace('PRODUCTS_CARDS', allCards);

// const app = http.createServer((req, res) => {
//     console.log('Request recived');
//     console.log(req.url);
//     res.setHeader('Content-Type', 'text/html');

//     res.end(page);
// });
// app.listen(1400, () => {
//     console.log('................ Server Start ....................');
// });



const http = require('http');
const fs = require('fs');

const data = fs.readFileSync('data.json');
// const dataObj = JSON.parse(data);
const dataObj = JSON.parse(data);

// console.log(data);
console.log(dataObj);

const product = dataObj.products;

// const page = '<h1>Welcome</h1>';

const cardTemplate = `
    <div class="card">
        <h1>TITLE</h1>
        <h2>DESCRIPTION</h2>

        <h3>PRICE</h3>
    </div>
`
const allCard = product.map(elem =>{
    let newCard = cardTemplate;
    newCard = newCard.replace('TITLE', elem.title);
    newCard = newCard.replace('DESCRIPTION', elem.description);

    newCard = newCard.replace('PRICE', elem.price);

    return newCard;

})

const htmlTemplate = `
<!DOCTYPE html>
<html>
    <head>
        <title>Bloger's World</title>
    </head>
    <body>
        PRODUCTS_CARDS
    </body>
</html>
`


const allCardstring = allCard.join();

// const card1 = cardTemplate.replace('TITLE', product[0].title)
// .replace('DESCRIPTION', product[0].description) 
// .replace('PRICE', product[0].price);

// const card2 = cardTemplate.replace('TITLE', product[1].title)
// .replace('DESCRIPTION',product[1].description) 
// .replace('PRICE', product[1].price)


const page = htmlTemplate.replace('PRODUCTS_CARDS',allCardstring);



const app = http.createServer((req, res) => {
    console.log('Request recived');
    console.log(req.url); 
    res.setHeader('Content-Type', 'text/html');

    res.end(page);
});
app.listen(3000, () =>{
    console.log('................ Server Start ....................');
});