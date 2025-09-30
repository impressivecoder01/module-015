// when to use break and continue
// for(let i = 0; i < 13; i++){
//     if(i%2===0){
//         console.log(i)
//     }
// }


for(let i = 0; i < 100; i++){
    if(i>55){
        break;
    }
    if(i%2===0){
        console.log(i)
    }
}


// ------------ while loop
let i = 0;
while(i<10){
    if(i>7){
        break;
    }
    console.log(i)
    i++
}