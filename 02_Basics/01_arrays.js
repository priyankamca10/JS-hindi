//array 

const myArr = [0,1,2,3,4,5]

const myHeros = ["Shaktiman","Naagraj"]

const myArr2 = new Array(1,2,3,4)
// console.log(myArr2);

console.log(myArr[0]);

//Array methods

myArr.push(6) //to add elements in array end

myArr.push(7)

myArr.pop() //to remove elements from back that is from end 

myArr.unshift(8) //this will add elements to start of array 

myArr.shift() //It will remove elements from start of array

console.log(myArr.includes(9)) //Array whether contain this element or not

console.log(myArr.indexOf(3)); //index of particular element

// it will convert array into strings type

let newArr = myArr.join() 

console.log(newArr);

console.log(typeof newArr);

console.log(myArr);

//slice ,splice 

console.log("A",myArr); //Original Array

//slice... in this 1 is starting index of array and goes till end range -1 and IT WILL NOT CHANGE THE ORIGINAL ARRAY ...WILL BE SAME AS IT IS 

const myn1 = myArr.slice(1,3) 
console.log(myn1)

console.log("B",myArr); // Original Array after slice operation

//splice - in this 1 is starting index of array and goes till end range and IT WILL CHANGE THE ORIGINAL ARRAY....MEANS REMAINING ELEMENT WILL BE THERE IN ORIGINAL ARRAY AFTER SPLICE OPERATION


const myn2 = myArr.splice(1,3)

console.log(myn2)

console.log("C",myArr); // Original Array after splice operation