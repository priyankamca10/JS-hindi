//map method of array - built-in array methods used to transform and select data without modifying the original array

const myNums = [1,2,3,4,5,6,7,8,9,10]
const newNums = myNums.map( (num) => num+10)
console.log(newNums);

//Chaining 
const newNums1 = myNums
    .map( (num) => num * 10)
    .map( (num) => num + 1 )    // the result of above method is pass to second method as input num
    .filter( (num) => num >= 40) // filter is based on return of  true & false

console.log(newNums1);