const http = require('http')
const fs = require('fs');
const url = require('node:url');
const { title } = require('process');

const data = fs.readFileSync('data.json', 'utf-8')
// console.log(data);

const dataObj = JSON.parse(data).products;


const searchBox = `
<div style="margin-bottom: 20px;">

<form action='/product'>
  <input type="text" name="productName">
  <button type="submit">Search</button>
</form>
  </div>
`;


const cardTemplate = `
<div class="product-card" style="border: 1px solid #ccc; padding: 10px; margin-bottom: 20px;  display: flex;
justify-content: center; flex-direction:column; height:auto; width:500px; align-items:center;">
<h3>$TITLE</h3>
<img src="img_src" alt="product-images" style="max-width: 100%; height: auto;">
<p>$PRICE</p>
<p>$Brand</p>
<a href="/product_links" >Read more</a>
</div>`

let result = [];
for (let i = 0; i < dataObj.length; i++) {

  let temp = cardTemplate;
  temp = temp.replace('$TITLE', dataObj[i].title)
  temp = temp.replace('img_src', dataObj[i].images[0])
  temp = temp.replace('$Brand', dataObj[i].brand)
  temp = temp.replace('$PRICE', dataObj[i].price)
  temp = temp.replace('product_links', `product?id=${i}`);
  result.push(temp);
}

result = result.join('');

result = searchBox + result;

// console.log(result);
const server = http.createServer((req, res) => {


  res.writeHead(200, { 'Content-Type': 'text/html' });


  const { pathname, query } = url.parse(req.url, true);
  // console.log(route, "\n\n");
  // console.log(path);
  // console.log(query);

  if (pathname == '/home') {
    res.end(result);

  }
  else if (pathname == '/product') {
    const id = query.id;
    // console.log(dataObj[id]);
    const items = dataObj[id];
    const pName = query.productName
    if (id) {


      // res.end(productid);
      res.end(`<div style="max-width: 800px; margin: 0 auto; padding: 20px; border-radius: 8px; box-shadow: 0 0 10px rgba(255, 0, 0, 0.2);">
        <style>
          h1 {
            text-align: center;
          }
          h2, p {
            color: black;
          }
          img {
            max-width: 100%;
            height: auto;
            margin-bottom: 20px;
            border-radius: 8px;
            display: block;
          }
          a {
            display: inline-block;
            padding: 10px 20px;
            background-color: blue;
            color: white;
            text-decoration: none;
            border-radius: 5px;
            transition: background-color 0.3s ease;
          }
      
          .buy-now {
            margin-top: 20px;
            text-align: center;
          }
          .buy-now a {
            background-color: green;
          }
     
        </style>
        <h1>Product Display Page</h1>
        <h1>Item ID-${items.id}</h1>
        <h2>Price - ${items.price}</h2>
        <img src="${items.thumbnail}" alt="Product Image">
        <p>${items.description}</p>
        <a href="/home">Back to Products Page</a>
        <div class="buy-now">
          <a >Buy Now</a>
        </div>
      </div>`);

    }
    else if (pName) {
      const SearchNameResult = dataObj.filter(({ title }) => title.toLowerCase().includes(pName.toLowerCase()));
      res.end(JSON.stringify(SearchNameResult));
    }
    else {
      res.end('<h3>Error......</h3>')
    }

  }
  else {
    res.end("404 page not found");
  }

  // res.end(result);

});
server.listen(1400, () => {
  console.log("server started.....");
})