//for each does not return value if it stores somewhere 

const myLang = ["js", "java", "python", "ruby"]
const values = myLang.forEach( (item) =>{
    console.log(item);

})
console.log(values);

//filter method of array.  - it will return 
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

//another example of using filter
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];
  const userBooks = books.filter( (bk) => bk.genre === "History")
   console.log(userBooks);

//   const userBooks1 = books.filter( (bk) => bk.publish >= 2000)

 const userBooks1 = books.filter( (bk) =>  
    {return bk.publish >= 1995 && bk.genre === "History"

    }) 

 console.log(userBooks1);
 