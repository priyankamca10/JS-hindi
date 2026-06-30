//objects can be defined in two ways -as literals and constructor(singleton)

// Objects literals 

const mySym = Symbol("key1"); //defining Symbol to use as a key in object

const jsUser = {
    name : "Priyanka",  
    "fullName" :"priyanka dubey" ,  //here key: value ,in which keys are stored as strings
    age : 23,
    location : "Uttar pradesh",
    email: "priyanka@google.com",
    isLoggedIn : false ,
    lastLoggindays : ["Monday", "Saturday"],
    [mySym]: "myValue1" //to define symbol as a key
}

console.log(jsUser[mySym]); //to access Symbol type of data
console.log( typeof mySym) //to check symbol type of data

console.log(jsUser.email); // one way to access element of object

console.log(jsUser["email"]); //another way to access the element of object

console.log(jsUser["fullName"]);


jsUser.email = "priyanka@chatgpt.com" //to change the value of key (overwrite)
// Object.freeze(jsUser); // to lock the value or object from getting change
jsUser.email = "priyanka@yahoo.com";
console.log(jsUser);

// To add function in an object 
jsUser.greeting = function(){
    console.log(" Hello JS user. ");
    
}
jsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
    
}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());

