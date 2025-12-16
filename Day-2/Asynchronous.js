//Asynchronous
//Asynchronous programming is a way for a computer program to handle multiple tasks 
// simultaneously rather than executing them one after the other.

//Techniques
//1. Callback function
//2. Promises
//3. Async/await


// callback

// function fetchdata(callback){
//   setTimeout(() =>{
//     const result=("Hello World");
//     console.log(result);
//     callback(result);
//   }, 2000
// );;
// }

// fetchdata(function(data){
//     console.log("Data receiveed: ", data);
// })


//Promise

// const myPromise= new Promise((resolve, reject)=>{
//     let success=true;

//     if(success){
//         resolve("Operation successful");
//     }
//     else{
//         reject("Operation failed");
//     }
// }
// )
// myPromise
// .then(result=>{
//     console.log(result);
// }
// )