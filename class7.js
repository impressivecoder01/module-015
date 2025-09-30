// when to use break and continue
// for(let i = 0; i < 13; i++){
//     if(i%2===0){
//         console.log(i)
//     }
// }


// for(let i = 0; i < 100; i++){
//     if(i>55){
//         break;
//     }
//     if(i%2===0){
//         console.log(i)
//     }
// }


// // ------------ while loop
// let i = 0;
// while(i<10){
//     if(i>7){
//         break;
//     }
//     console.log(i)
//     i++
// }
// break--> i am done this loop. loop end
//---------- continue--> skip this iteration

// for(let i = 1; i < 20; i++){
//     if(i%2===0){
//         continue;
//     }
//     console.log(i)
// }
let sum = 0
let num = 100;
while(num < 200){
    num++
    if(num%2 !==0){
        continue;
    }
    sum = sum + num;
    console.log(num)
}
console.log('total', sum)


for(let i = 1; i<10; i++){
    if(i%7===0){
        break;
    }
    console.log(i)
}
for(let i = 1; i<10; i++){
    if(i%7===0){
        continue;
    }
    console.log(i)
}

