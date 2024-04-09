// const figlet = require("figlet");

// figlet('Hello');
// figlet("Hello World!!", function (err, data) {
//     console.log(data);
    // if (err) {
    //   console.log("Something went wrong...");
    //   console.dir(err);
    //   return;
    // }
    // console.log(data);
//   });


// old Method
// fetch('https://api.github.com/user/deepak3440')
// .then((res)=>{
//     return res.json();
// })
// .catch((data)=>{
//     console.log('Error Occurred');
// })

// console.log('End');

// console.log('start');
// async await
// async function getApi(){
//     console.log('api calling....');
//     const pr = await fetch('https://api.github.com/users/deepak3440');
//     console.log('making json...');
//     const data = await pr.json();
//     console.log('::fetched data');
// }

// getApi();
// console.log('end');



concole.log('start');

async function allAPI(){
  const pr1 = new Promise((res, rej)=>{
    console.log('promise 1...');
    setTimeout(()=>{
      consile.log('timeout 1...')
    }, 10000);
  })
  
console.log('promise 1 completed');
}
callApi();