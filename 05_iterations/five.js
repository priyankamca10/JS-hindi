//for each 

const myLang = ["js", "java", "python", "ruby"]
myLang.forEach(function (val){             //for each(callback function) using function without using function name
    console.log(val);
    
})

// myLang.forEach((items) => {          //for each using arrow function
//     console.log(items);
// })

//we can pass outside written function in foreach 

// function printme(items){
//     console.log(items);
// }
// myLang.forEach(printme)     // this print values of array we are just giving refernce of function 

myLang.forEach((item,index,arr) => {     //for each does not contain only one parameter as item 
                                        //It also contain index ,arr means index no and full access of array values
     console.log(item,index,arr);
})

//[{},{},{}]
const myCoding =[
    {
        languageName : "Java",
        languageFilename : "java"
    },
    {
        languageName : "Javascript",
        languageFilename : "js"
    },
    {
        languageName : "python",
        languageFilename : "py"
    },
]

myCoding.forEach( (item) => {
    console.log(item.languageName);

})