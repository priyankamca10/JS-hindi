const user = {
    username: "Priyanka",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username}, welcome to the website`);
        console.log(this); //it will show current value of variables 
        
    }
}
// user.welcomeMessage()
// user.username = "Sam"         //because of this keyword it will take the current (changed)value too
// user.welcomeMessage()

console.log(this);    //okay so here (node) when we will see the output then it will return empty object {} bcz there is no global context,but in 
// but in browser JS engine will return Global object as Window

//if we use this keyword inside function it will return some predefined functions ,and if outside empty object{}

// function chai(){            
//     let snacks ="Tea"
//     console.log(this);    
    
// }
// chai()
           

const chai = function() {          
      let snacks = "Tea"
     console.log(this.snacks);     //will return empty {}
}
chai()

const coffee = () => {            // ARROW FUNCTION     
      let snack = "Tea"
     console.log(this.snack);     //will return empty {}
}
chai()


//++++++++++++++++++ ARROW FUNCTION +++++++++++++++++++
const addTwo = (num1,num3) => {          //Basic Arrow function
 return num1+num3
}
console.log(addTwo(4,3));

// const addThree = (num1,num2,num3) =>   num1+num2+num3     //Implicit return Arrow function

const addThree = (num1,num2,num3) =>   (num1+num2+num3) // another way of defining arrow function
console.log(addThree(4,3,4))