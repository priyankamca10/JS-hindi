// for of (loop) 
// Syntax - for (const element of object) { }  ---here object can be string ,array etc 
// And element is variable or iterator variable

//for of - on array
const arr = [1,2,3,4,5]
for (const num of arr) {
    console.log(`Elements of array is : ${num}`);
    
}

//for of - on string 
const greeting = "hello world!"
for (const greet of greeting) {
    console.log(`Each char is ${greet}`);
    
}