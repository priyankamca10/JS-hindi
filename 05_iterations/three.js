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

//Map - type of object which hold keys and values and also they are unique

const map = new Map()
map.set("IN" , "India")
map.set("USA", "United State of America")
map.set("FR" , "France")
console.log(map);

//applying for of loop on above map
for(const [map1,map2] of map){       // here map1 will hold keys and map2 will hold values ..hence we can use any name 
    console.log(map1, ": - ", map2);
    
}

//for-of loop will not iterate object type of data
const myObj ={
    "game1" : "Tic-Tac-Toe",
    "game2" : "Subway Sufer"
}
for (const [key,value] of myObj) {
     console.log(key, ": - ", value);
    
}