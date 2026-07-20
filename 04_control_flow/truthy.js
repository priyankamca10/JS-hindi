// here we will check which value is acceptable means truthy values 
// which is accepatable by if and what are false values

const userName = []                 

if (userName) {
    console.log("Got username of user");
}else{
    console.log("Username is not there");
    
}

//correct way to check array is empty or not 
if (userName.length === 0) {
    console.log("Array is empty");
    
}


//Correct way to check given Object is empty or not 
const emptyObj = {}
if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");

}


//falsy values - that is not acceptable while condition checking 
// false , 0 , -0 , BigInt 0n , null , undefined , Nan, ""

//truthy values
// "0" , "false" , " " , [], {} , function(){} , 

