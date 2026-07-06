var c = 200 //avoid uding var that why we use let and const 
let b = 300

if(true){                    // this is called block scope
    let a = 10
    const b = 20 
    var c = 30
    console.log("Inner b value  : ",b);
    
}
// console.log(a);
console.log("Outer b value : ",b); // in this global var that is b will be printed 300
console.log(c); // this will get print because of var.. it is not block scope

//nested function scope ...In This child function can access the parent function 
function one(){
    const username = "Priyanka"

    function two(){
        const websiten = "Youtube"
        console.log(username);
        
    }
    // console.log(websiten);

    // two()
    
}
one()

// Understanding nested if block scope 
if(true){
    const username = "Priya"
    if (username === "Priya"){
        const website = "youtube"
        console.log(username + website);
        
    }
    console.log(website);  // this will not work because it is out of block scope
    
}
console.log(username); //same too will not work because if scope problem 
