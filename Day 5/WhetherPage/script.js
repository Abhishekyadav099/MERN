// function fetchAPI(){
//     const url = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services /timeline/DELHI%2CUK?unitGroup=us&key=A6JJ3JY3NPB2NW47XKNRG9HSJ'

//     fetch(url)
//     .then((res)=>res.json())
//     .then(console.log);
// }

// fetchAPI()

const root = document.getElementById("root");
function renderUI(data){
    const days = data.days;
    console.log(days);

    const row = document.createElement("tr");
    //make heading row

    let cell = document.createElement("th");
    cell.innerText = 'Date';
    row.appendChild(cell);

    let cell2 = document.createElement("th");
    cell2.innerText = 'Maximum Temperature'
    row.appendChild(cell2);

    // let cell3 = document.createElement("th");
    // cell3.innerText = 'Minimum Temperature'
    // row.appendChild(cell3);

    root.append(row);

    const childRow = document.createElement("row");
    const c1 = document.createElement("th");
    c1.innerText = 'Date';
    childRow.appendChild(c1);
    const c2= document.createElement("th");
    c2.innerText = 'Maximum Temperature';
    childRow.appendChild(c2);
    root.appendChild(childRow);

}

fetchAPI()