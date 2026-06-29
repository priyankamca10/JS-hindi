const marvel_heros = ["Spiderman","thor","Ironman"]

const dc_heros = ["superman","flash", "batman"]

//push - it push another array as element in existing array

marvel_heros.push(dc_heros)            
console.log(marvel_heros);

 //concat operator - will add another array into existing array but stored in new array

const allheros = marvel_heros.concat(dc_heros);
console.log(allheros);

//Spread operator -  can also used as concat method

const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros);

//flat operator will spread  nested array into one array 

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

//whether given element in array or data is array or not
console.log(Array.isArray("Hitesh"));

//to convert given data into array
console.log(Array.from("Hitesh"));

//
console.log(Array.from({name: "hitesh"}));

//To convert number into array

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));
