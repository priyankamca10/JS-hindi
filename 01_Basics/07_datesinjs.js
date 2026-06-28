//Dates ..it is an Object

let myDate = new Date();
// console.log(myDate)

// console.log(myDate.toString());

// console.log(myDate.toDateString());

// console.log(myDate.toLocaleString());

// console.log(myDate.toLocaleDateString());

// console.log(myDate.toISOString());

// console.log(myDate.toLocaleTimeString());

// console.log(myDate.toJSON());

// console.log(typeof myDate)


let mycreatedDate = new Date(2026, 2 , 24); //YYYY, M(start with 0), date)
console.log(mycreatedDate.toDateString());

let mycreateDate = new Date(2026, 0 , 25 , 5 ,3) //YYYY, M,Date, Hours,Minute,seconds)
console.log(mycreateDate.toLocaleString());

let mycreatedDate1 = new Date("2026, 01 , 24"); //YYYY, MM, date)
console.log(mycreatedDate1.toLocaleString());

let mycreatedDate2 = new Date("05-24-2026"); //(MM-DD-YYYY)
console.log(mycreatedDate2.toLocaleString());

let myTimeStamp = Date.now() //To get milli seconds
console.log(myTimeStamp);

console.log(mycreatedDate2.getTime()); // to get milliseconds

//to convert Milliseconds to seconds
console.log(Math.floor(Date.now()/1000));
