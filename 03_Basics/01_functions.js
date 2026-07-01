// console.log(P);     //suppose we have to do this work for 10 times 
// console.log(R);     //so instead of this we use function
// console.log(I);
// console.log(Y);
// console.log(A);

function sayMyName (){
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
// const result = addTwoNumber(5,5) //this will not work because we have not use return in function
// console.log("Result : ", result); 


function addTwoNumber( num1,num2){             //function with return keyword
      //  let result = num1 + num2
      //  return result
      return num1 + num2;
 }
const result = addTwoNumber(5,5)
console.log("Result : ", result);