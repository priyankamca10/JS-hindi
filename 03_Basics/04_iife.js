//Immediately invoked function expression (IIFE)

// Global scope ke pollution se bachne ke liye we use IIFE 

(function chai(){  
    //named IIFE                  // ()() here we use one bracket to wrap function inside of it and another to call it
    console.log(`DB Connected`);
    
})();             //to invoke another function we use ;

( (name) => {
    //unnamed IIFE
console.log(`DB Two Connected ${name}`);

})("priya")