// console.log(P);     //suppose we have to do this work for 10 times 
// console.log(R);     //so instead of this we use function
// console.log(I);
// console.log(Y);
// console.log(A);

function sayMyName (){           //normal function
   console.log("P"); 
   console.log("R"); 
   console.log("I");
   console.log("Y");
   console.log("A");  
}
sayMyName()  // to call or execute the function


// function addTwoNumber( num1,num2){      //function without return
//        console.log(num1 + num2);
//  }
//  addTwoNumber(2,8);
// const result = addTwoNumber(5,5)       //this will not work because we have not use return in function
// console.log("Result : ", result); 


function addTwoNumber( num1,num2){             //function with return keyword
      //  let result = num1 + num2
      //  return result
      return num1 + num2;  // from return we can store value in another variable
 }
const result = addTwoNumber(5,5)
console.log("Result : ", result);


function userLoggedIn(username) {
   return `${username} has just logged in`
}
console.log(userLoggedIn("Priyanka"))


//for example how we can pass multiple arguments using spread or rest operator
function calculateCartPrice(val2,val3, ...val1) {    //(...val1) will automatically collect all values & return in array
   return val1
}
console.log(calculateCartPrice(200,2000,3000));




// HOW TO PASS OBJECT IN FUNCTION
const user = {
   username : "Priya",
   price : 499
}
function handleObject(anyobject){        //(anyobject) means we can pass any object as a parameter
   console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
   
}
// handleObject(user)  //instead of making object and passing it

handleObject({             //we can pass any object directly 
   username: "sam",
   price : 200
})

// HOW TO PASS ARRAY IN FUNCTION

const mynewArray =[200,400,600,500]
function returnSecondvalue (getarray){
   return getarray[1]
}
console.log(returnSecondvalue(mynewArray))

// console.log(returnSecondvalue([2000,3000,4000]))