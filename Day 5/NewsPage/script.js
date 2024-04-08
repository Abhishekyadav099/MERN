console.log("...APP Started..");

function callAPI(){

    fetch("https://newsapi.org/v2/everything?q=tesla&from=2024-03-08&sortBy=publishedAt&apiKey=6a5d6402e08c46e78ea1b72b6d8b8878")
    .then((res )=>{
        return res.json();
    })
    .then((data)=>{
        renderUI(data)
    // console.log();

    })
}   

// callAPI()

function renderUI(data){
    // GOT THE ARTICLES From daat
    // console.log(articles);   
    // console.log(data);
    
    const root = document.getElementById("root");
    const articles = data.articles;
    for(let i=0; i<articles.length; i++){
        const ar = articles[i];
        const div = document.createElement("div");
        div.setAttribute("class","news-card");

        const h3 = document.createElement("h3");
        h3.innerText = ar.title;
        div.appendChild(h3);
        
        const img = document.createElement("img");
        img.src = ar.urlToImage;
        div.appendChild(img);

        // const a = document.createElement("a");
        // a.innerText = Read more...;
        // a.target
        // div.appendChild(img);
    
        root.appendChild(div);
    }

// Single article from the articles
    
    // console.log(ar);

    // created parent div
    

   

    
    
    // div.innerText = ar.title;
   
    // const img = document.createElement("img");
  
    
  
   

}

// renderUI();
callAPI()