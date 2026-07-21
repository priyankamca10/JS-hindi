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

//++++++++++++++++++++++++++++++++++++++++++++++//

/*The Nullish Coalescing Operator (??)
-  is a logical operator that returns its right-hand operand when its left-hand operand is null or undefined.
 Otherwise, it returns the left-hand operand. */

 //Syntax - const result = leftOperand ?? rightOperand;

//val1 = 5 ?? 10 ;
val1 = null ?? 10
//val1 = undefined ?? 15
//val1 = null ?? 10 ?? 15
console.log(val1)

//Ternary Operator - Syntax = condition ? true : false
const iceTeaprice = 100

iceTeaprice >=80 ? console.log("more than 80") : console.log("less than 80");

