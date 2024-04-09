// console.log('start')
// setTimeout(()=>{console.log('Timeout..')},0)
// console.log('end')

// setTimeout(()=>{
//     console.log('Timeout 1..')
// }, 20000)
// console.log('start')
// setTimeout(()=>{
//     console.log('Timeout 2..')
// }, 5000)
// console.log('intermediate')
// console.log('end')




//  createOrder()
//  makePaymrnt()

// function createOrder(x, fn){
//     // 2ms 4ms 500ms
//     console.log(x);
//     setTimeout(()=>{fn('lik123')},1000);
// }

// function makePaymrnt(orderID){
//     console.log(orderID);
// }

// createOrder('soap', makePaymrnt);



// const pr = new Promise((resolve,reject)=>{

//     if(true){
//         setTimeout(()=>{
//             resolve();
//         }, (Math.random()%10)*1000);
//     }
//     else{
//         reject();
//     }
// });

// console.log(pr);

// setTimeout(()=>{console.log('First timeout ...'), 0});

// const pr = new Promise((resolve,reject)=>{
//     setTimeout(()=>{reject("Some items are out of Stock");}, 5000);
// });

// console.log(pr);
// pr.then(function b(res)=>{
//     console.log("promise completed", res);
// })

// setTimeout((function xyz()){
//     console.log('I amtwo');
// })

// .catch((err)=>{
//     console.log(err);
// })


// setTimeout(function abc() {
//     console.log('I am one');
// }, 0);

// const pr = new Promise((res,rej)=>{
//     setTimeout(()=>(res('done')))
// })


// console.log('Hello');

// const arr = [10,22,34];

// const ans = arr.map((a)=>{
//     console.log(a);
//     return a*2;
// });

// const ans2 = arr.map(a=>a**2);
    

// console.log(ans);

// const arr = [10,22,34];

// const ans = arr.push(99);

// const arr2 = arr.map((a)=>a*2);

// console.log(arr);
// console.log(arr2);


// const arr = [10,22,34];
// const ans = arr.filter((a)=>{
//     if(a>20)return true;
//     else return false;
// })

// console.log(arr);
// console.log(ans);

// const arr = [
//     'Delhi',  'Mumbai', 'Chennai', 'Kolkata', 'Pune',
//     'India', 'Russia', 'USA', 'Iraq'
// ]

// const ans = arr.filter((s)=>{
//     if(s.includes('i') || s.includes('I')){
//         return true;
//     }
//     else false;
// })

// console.log(ans);


// const arr = [
//     'Delhi,IndiA',  'Mumbai-india', 'Chennai-INDIA',
// ]

// const ans = arr.filter((a)=>{
//     const ns = a.toLowerCase();
//     if(a.includes('india')){
//         return true;
//     }
//     else{
//         return false;
//     }
// })

// console.log(ans);