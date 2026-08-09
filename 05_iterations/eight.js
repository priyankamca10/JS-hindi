// reduce method of Array.prototype -
//"reducer" callback function on each element of an array to process and combine them into a single output value.

//syntax - 
//  array.reduce((accumulator, currentValue, currentIndex, array) => {
//    Logic here
//   }, initialValue);

const myNums = [1,2,3]
const myTotal = myNums.reduce( (acc, curval) => {
    console.log(`acc : ${acc} & currentvalue : ${curval}`);
    
    return acc + curval;
},0)
console.log(myTotal)

//another example
const shoppingCart = [
    {
        courseName : "js course",
        coursePrice : 999
    },
    {
        courseName : "py course",
        coursePrice : 1999
    },
    {
        courseName : "mobile dev course",
        coursePrice : 1999
    },
]
const shoppingTotal = shoppingCart.reduce( (acc, item) => acc + item.coursePrice,0 )
console.log(shoppingTotal);
