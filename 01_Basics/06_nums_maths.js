//normal way to declare Number 
const score = 100;
console.log(score);

//another way to declare Number using new(Object) keyword
const balance = new Number(400);
console.log(balance); //along with value it print type of data

//functions of Number

const newBalance = balance.toString(); //toString
console.log(typeof newBalance);

console.log(balance.toString().length)

console.log(balance.toFixed(3)); //toFixed it will add 0's  according to given parameter value after given number

const anotherNumber = 123.89867;
console.log(anotherNumber.toPrecision(4)); // Round of krega value 

let hundredNum = 1000000;
console.log(hundredNum.toLocaleString('en-IN')); // it will add seprator as , to separate value or 0's


//++++++++++++++++++++++++ MATHS +++++++++++++++++++++

console.log(Math);

//functions provided by math library

console.log(Math.abs(-4)); // it will convert negative number to positive but positive no will remain positive

console.log(Math.round(4.6)); // Round off

console.log(Math.ceil(4.2)); // if will take highest num even if number is slightly larger after point 

console.log(Math.floor(5.6)); // it will lowest num apposite of ceil

console.log(Math.sqrt(64)); // square root of given number

console.log(Math.min(6,7,4,2)); // Minimum number among given numbers

console.log(Math.max(8,5,9,2)); //Maximum number 

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

let min = 10;
let max = 20;

console.log(Math.floor(Math.random()* (max-min +1)) + min);