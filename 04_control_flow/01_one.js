// if 

const isUserLoggedIn = true
if (2 === "2"){
    console.log("executed");
    
}

//global scope 
const score ="200"
if(score > 100){
    const power ="fly"
    console.log(`user power : ${power}`);
}
//console.log(`user power : ${power}`)


//if else

const temperature = 30
if(temperature === 20){
   console.log("Temperature is equal to 20");
}
else{
    console.log("Temperture is not equal to 20");
}
// < , > , <= , >= , == , === 

//if else if

let balance = 1000

if(balance < 500){
    console.log("Balance is Less than 500");
} else if(balance < 750){
    console.log("Balance is Less than 750");
}else if(balance < 900){
    console.log("Balance is Less than 900");
}else{
    console.log("Balance is Less than 1200");
}