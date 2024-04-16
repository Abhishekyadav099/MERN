const fs = require("fs");
const http = require("http");
const url = require("url");
const data = fs.readFileSync("./data.json", "utf8");
const dataObj = JSON.parse(data).products;
// console.log(Objdata);
const cardTemplate = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    
    <style>
    .product-card {
        background-color: aqua;
        max-width: 400px;
        padding: 24px;
        margin: 20px auto;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);   
    }
    .product-card img {
        max-width: 100%;
        height: auto;
        display: block;
        margin: 0 auto 16px;
        border-radius: 8px;
    }
    
    .product-card {
        flex-wrap: wrap;
        // display: flex;
        justify-content: space-between;
    }
    h3 {
        text-decoration: underline;
        text-align: center;
        font-size: 40px;
        color:red;
}
.heading{
    
}
</style>
</head>
<body>

     <div class='product-card'>
        <h3>$TITLES</h3>
        <img src="$img_src5" alt='product-image' >
        <h2>$price</h2>
        <p>$brand</p>
        <p>$stock</p>
        <p>$category</p>
        <p>$discountPercentage</p>
        <a href="$product_links">More info</a>
    </div>
</body>
</html>`
    
   


let result = [];
for (let i = 0; i < dataObj.length; i++) {
    let temp = cardTemplate;
    temp = temp.replace('$TITLES', dataObj[i].title);
    temp = temp.replace('$img_src5', dataObj[i].images[0]);
    temp = temp.replace('$price', dataObj[i].price);
    temp = temp.replace('$discountPercentage', dataObj[i].discountPercentage);
    temp = temp.replace('$brand', dataObj[i].brand);
    temp = temp.replace('$stock', dataObj[i].stock);
    temp = temp.replace('$category', dataObj[i].category);
    temp = temp.replace('$product_links', `/product?id=${i}`);

    result.push(temp);

}
result = result.join(' ');


// console.log(result);
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });

    // const route = req.url;
    // console.log(route);
    // const path = url.parse(req.url);
    // const pathname = path.pathname;
    const { pathname, query } = url.parse(req.url, true);
    console.log(query);

    // const path = url.parse(req.url).pathname
    // console.log(path);

    if (pathname == '/home') {
        res.end(result)
    }
    else if (pathname == '/product') {
        const id = query.id;
        // const productid = dataObj[id].title;
        // res.end(productid)
        const items = dataObj[id];

        res.end(`
            <div>
                <h4>${items.title}</h4>
                <h4>${items.id}</h4>
                <h2>${items.price}</h2>
                <h2>${items.description}</h2>
                <p>${items.brand}</p>
                <p>${items.stock}</p>
                <p>${items.category}</p>
                <img src="${items.thumbnail}" alt="asdf"></img>
                <a href="/home">Back</a>
            </div>
        `);
    }
    else {
        res.end('404... Not Found')
    }

    // res.end(result);
})

server.listen(1400, () => {
    console.log("....Server.....");
});