let userName =  "Priyanka";
let repoCount = 5;

console.log(`Hello my name is ${userName} and my Repository count is ${repoCount}`)

// To declare variables

const gameName = new String('Priyankad')

//different functions of strings

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);        //length
console.log(gameName.toUpperCase());  //toUppercase
console.log(gameName.charAt(2));    //charAt
console.log(gameName.indexOf('a'));  //indexOf


const newString = gameName.substring(0,5) // substring
console.log(newString);

const newSlicestring = gameName.slice(-8,4) //slice
console.log(newSlicestring);

const newStringOne = "    Priya   " //trim
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://priyanka.com/priyanka%20dubey" //replace
console.log(url.replace('%20','-'));

//includes
console.log(url.includes('Priyanka'));

//split
const newgameName = new String('Priyanka-du-bey')
console.log(newgameName.split('-'));
