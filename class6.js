//Different ways to use loop
// for (let i = 0; i < 20; i++){
//     if(i%2===0){
//         console.log(i)
//     }
// }

// for(let i = 0; i < 25; i = i+ 2){
//     console.log(i)
// }

// for(let i = 0; i < 30; i++){
//     if(i % 2 !==0){
//         console.log(i)
//     }
// }

// for(let i = 1; i < 34; i = i + 2){
//     console.log(i)
// }

// give me the list of numbers which are divisible by 5 between 1 to 30
// for(let i = 1; i < 50; i++){
//     if(i % 5 === 0){
//         console.log('numbers are',i)
//     }
// }
// for(let i = 1; i < 50; i++){
//     if(i % 5 !== 0){
//         console.log('numbers are',i)
//     }
// }
// for(let i = 1; i < 50; i++){
//     if(i % 3 === 0){
//         console.log('three',i)
//     }
// }
// for(let i = 1; i < 50; i++){
//     if(i % 3 !== 0){
//         console.log('three',i)
//     }
// }


// for(let i = 0; i < 60; i++){
//     if(i % 3 === 0 && i % 5 === 0){
//         console.log('divisible by three and five',i)
//     }
// }
// for(let i = 0; i < 60; i++){
//     if(i % 3 === 0 || i % 5 === 0){
//         console.log('divisible by three or five',i)
//     }
// }

// give a the sum of numbers which are divisible by three between 1 to 30.
// let sum = 0;
// for(let i = 0; i <= 30; i++){
//     if(i%3 ===0){
//         sum = sum + i;
//     }
// }
// console.log(sum)
let sum = 0;
for(let i = 0; i <= 30; i++){
    if(i % 3 === 0 && i % 5 === 0){
        sum = sum + i;
        console.log(sum)
    }
}
console.log('sum',sum)