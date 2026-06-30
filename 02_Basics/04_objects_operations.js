// const tinderUser = new Object() // Singleton object 

const tinderUser ={} //non singleton object

tinderUser.id = "123abc"
tinderUser.name ="Samm"
tinderUser.isLoggedIn = false

console.log(tinderUser);

console.log(Object.keys(tinderUser));   //To extract keys from given object
console.log(Object.values(tinderUser));  //To extract values from given object 
console.log(Object.entries(tinderUser));     // it convert each key value pair into one array
console.log(tinderUser.hasOwnProperty('isLoggedIn'));  //To check whether object contain particular property or not

const regularUser ={                 // Nested objects
    email : "samm@gmail.com" ,
    fullname : {
        userFullname : {
            firstName : "Priyanka",
            lastName : "Dubey"
        }
    }
}

console.log(regularUser.fullname.userFullname);

//combining different objects into one target object

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}
const obj3 = {5:"e", 6:"f"}

//okay so assign will combine all objects into target object
//syntax is Object.assign({},source)  - so here empty {} act as target object i.e output object after merging and source means object name that need to combine
//if we dont give {} this under parameter then all the changes will be applied on first dource given object 
//for e.g here on obj1

const obj4 = Object.assign( {}, obj1,obj2,obj3) 
console.log(obj4);
console.log(obj1); 

const obj5 = {...obj1, ...obj2} //spread method to combibe objects
console.log(obj5);

//array of objects 
const users = [
    {
        id : 1,
        email : "p@gmail.com"
    },
    {
        id : 2,
        email : "c@gmail.com"
    },
    {
        id : 3,
        email : "k@gmail.com"
    }
]
console.log(users[1].email);

//******* object de-structure

const course ={
    courseName : "JS ",
    price : "999",
    courseInstructor : "Hitesh"
}
// console.log(course["courseInstructor"]);  // to access the object property or element

//important syntax to access the property of object together
const {courseInstructor:instructor , price : coursePrice} = course  
console.log(instructor,coursePrice);
