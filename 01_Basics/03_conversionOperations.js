let score = "45abc" //try null , undefined, true

 console.log(typeof score)
 console.log(typeof(score))

let valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber)

// 33 => number
// "33" => 33
// "33abc" => NaN
// true => 1 , false => 0
// null => 0
//undefined => NaN


let isLoggedIn = 1 //try empty string value "" will be false

let booleanisLoggedIn = Boolean(isLoggedIn)
console.log(booleanisLoggedIn);

// 1 => true; 0=>false
// "" => false
// "priya" => true


let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)

//********************** Operations ****************

let value = 10
let  negValue = -value
console.log(negValue)

// console.log(2+2);
// console.log(2*2);
// console.log(2-2);
// console.log(2/2);
// console.log(2%2);
// console.log(2**3);

let str1 = "Hello";
let str2 = " Priyanka";
let str3 = str1 + str2;
console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2)
// console.log( 1 + 2 + "2")

//console.log( (4 + 2) * 5 % 2);

//console.log(+true)    //answer is 1
//console.log(+"");      //answer is 0

let num1 , num2 , num3;
num1 = num2 = num3 = 2+2;
console.log(num1,num2,num3);

let gameCounter = 100
//gameCounter++;
++gameCounter;
console.log(gameCounter)

//*****************ASSIGNMENT ON PREFIX AND SUFFIX OPERATOR PRECEDENCE ********************

let x = 3;
const y = x++; //post-increment
console.log("x = ",x , "y = ", y);

//In post-increment Use the value first, then increase it
//y = x → so y = 3
//Then x is incremented → x = 4


let a = 3;
const b = ++a; // pre-increment
console.log(`a:${a}, b:${b}`);

//Increase first, then use the value
// a is incremented → a = 4
// Then assigned → b = 4
