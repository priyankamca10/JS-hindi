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
