//for each does not return value if it stores somewhere 
// const myLang = ["js", "java", "python", "ruby"]
// const values = myLang.forEach( (item) =>{
//     console.log(item);

// })
// console.log(values);

//filter method - it will return 
const myNums = [1,2,3,4,5,6,7,8,9,10]

const newNums = myNums.filter( (num) => {
    return num > 5
})
console.log(newNums);

//Doing same with for each but with little use of logic to return 

const newNum = []
myNums.forEach( (num) => {
    if (num > 5) {
        newNum.push(num)
    }
})
console.log(newNum);
