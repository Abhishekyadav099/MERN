const fs = require("fs");
const http = require("http");
const url = require("url");
const data = fs.readFileSync("./data.json", "utf8");
const dataObj = JSON.parse(data).products;
// console.log(Objdata);
const cardTemplate = `
    <div class='product-card'>
        <h3>$TITLES</h3>
        <img src="$img_src5" alt='product-image' >
        <a href="$product_links">More info</a>
    </div>`;


let result = [];
for(let i=0; i<dataObj.length; i++){
    let temp = cardTemplate;
    temp = temp.replace('$TITLES',dataObj[i].title);
    temp = temp.replace('$img_src5',dataObj[i].images[0]);
    temp = temp.replace('$product_links', `/product?id=${i+1}`);

    result.push(temp);
}
result = result.join(' ');


// console.log(result);
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html'});

    // const route = req.url;
    // console.log(route);
    // const path = url.parse(req.url);
    // const pathname = path.pathname;
    const {pathname, query} = url.parse(req.url, true);
    console.log(query);

    // const path = url.parse(req.url).pathname
    // console.log(path);

    if (pathname=='/home') {
        res.end(result)
    }
    else if (pathname=='/product') {
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
                <img src="${items.thumbnail}" alt="asdf"></img>
                
            </div>
        `);
    }
    else{
        res.end('404... Not Found')
    }

    // res.end(result);
})

server.listen(1400,()=>{
    console.log("....Server.....");
});