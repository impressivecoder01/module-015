//what is a loop, explore for loop
// const : value will not change
//let : value can change
// var : we should not use it

const amount = 200;
if(amount > 100){
    console.log('eat')
}
else{
    console.log('do not eat')
}

// array
const numbers = [1, 2, 3, 4 ,5 ,6, 7, 8, 9]
console.log(numbers)

for(let num of numbers){
    console.log(num, 'done')
}
for(let num of numbers){
    console.log(num += 1)
}
const fruits = ['orange', 'apple', 'banana', 'jackfruit', 'watermelon'];
for(const fruit of fruits){
    console.log(fruit)
}