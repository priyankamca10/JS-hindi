//for

for (let i = 0; i <= 10 ; i++) {
    const element = i;
    if(element == 5){
        console.log("5 is the best number");
    }
    console.log(element);
    
}

//nested loop
for (let i = 0; i <= 10; i++) {
    console.log(`Outer Loop value : ${i}`);
    for (let j = 0; j <= 10; j++) {
        // console.log(`Inner Loop value: ${j} and inner loop ${i}`);
        console.log(i + '*' + j + '=' + i*j);
        
        
    } 
}

//for loop on array
let myArray = ["Flash", "Spiderman" , "Batman"]
console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
    
}

// star program using nested loop
let rows = 5;

// Outer loop controls the rows
for (let i = 1; i <= rows; i++) {
  let pattern = "";
  
  // Inner loop controls the stars in each row
  for (let j = 1; j <= i; j++) {
    pattern += "* ";
  }
  
  console.log(pattern);
}

//break and continue 

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log("Detected 5");
        break;
    }
    console.log("value of i is :",index);
    
    
}

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log("Detected 5");
        continue;
    }
    console.log("value of i is :",index);
    
    
}