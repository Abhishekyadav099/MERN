// console.log('Hello ');


// var message = 'Hello world';

// var age = 18;
// age = "Done";


// console.log(message);

// loosely typed
// strictly typed

// dynamically typed
// static typed

// function env(){
// console.log(message);

// var message = 'Hello';

// console.log(message);

// var message = 'else';

// console.log(message);

// }

// env();


// function env(){
// for(var i = 0; i<=5; i++){
// console.log('--',i);
// }
// console.log(i);
// }

// env();
// console.log(message);

// let message='hello';

// console.log(message);

//CONST
// const message="hello";
// message='else';
// console.log(message);

// let userAge = 'abcd'
// userAge = 'abcd';
// console.log(typeof(age))

// let arr = ['a','b','c','d'];

// arr[0] = 'abcd';

// console.log(arr);

// let str = "12";

// let age = 20;

// let ans = age + (str-1+1);
// console.log(ans);


// let str = "12.12";
// let p = parseInt(str);
// let n = Number(str);
// console.log(p,n);

// let a = '12';
// let b = 12;

// if (a==b) {
//     console.log('yes')    
// }
// else{
//     console.log('no')
// }

// if (a==b) {
//     console.log('yes')    
// }
// else{
//     console.log('no')
// }

// const str = 'khan';
// const usrName = 'My Name is: ';
// const ans = '$(usrName) $(str) ';
// console.log(ans);



// function print(str='nothing is here'){
//     console.log((str));

// }

// const s = 'Hello';
// print();

// let a = 1;
// if(a){
//     console.log('yes');
// }
// else{
//     console.log('no');
// }

// function sum(a,b){
//     if(a && b){
//     console.log(a+b);
//     }
//     else{
//         console.log(a);
//     }
// }
// sum(20);

// function sum(a=0,b=0){
//     console.log(a+b);
// }


// function declaration
// function print(){
//     console.log('--');
// }

//function assignment (named)
// const a = function print(){
//     console.log('--');
// }

// function assignment (anonymous)
// const b = function print(){
//     console.log('--');
// }

//arrow function assigment
// let c = () =>{
//     console.log('--');
// }

// print();
// a();
// b();
// c();


// let a = 2;

// switch(a){
//     case 1:{
//         console.log('one');
//         break;
//     }
//     case 2:{
//         console.log('two');
//         break;
//     }
//     case 3:{
//         console.log('three');
//         break;
//     }
//     default:{
//         console.log('not 1,2,3 ');
//     }
// }

// const obj = new Object();
// obj[1] = 'one';
// obj[2] = 'two';
// obj[12] = 'twelve';
// console.log(obj);

// const obj = {
//     1: 'one',
//     'firstName': 'Ajay',
//     'lastName':'Singh',
//     12: 'twelve',
// };
// const fullName1 = obj.firstName +'' + obj.lastName;
// const fullName2 = '$(obj.firstName) $(obj.lastName)';

// console.log(firstName);
// console.log(lastName);

const obj = {
    1: 'one',
    'firstName': 'Ajay',
    'lastName':'Singh',
    'age':20,
    'address': 'Delhi',
};

const x = prompt('Please tell the property to know');
console.log(obj[x]);
