//introduction to do while loop
// do while loop
// let n = 0;
// while(n < 10){
//     console.log(n)
//     n++;
// }

let i = 10;
// while(i < 5){
//     i++;
//     console.log(i)
// }
do{
    console.log(i)
    i++
}
while(i < 5)


    //--------------- practice
let sum = 0;
for(let i = 0; i<100; i++){
    sum = sum + i;
    if(sum >= 100){
        break;
    }
    console.log(sum)
}