//for in loop returns keys of value by default ..so to access the values we have to write variable name[key]
//for-in loop use for Object iterations 
const myLang = {
    js : "Javascript",
    cpp : "C++",
    rb : "ruby" ,
    swift : "swift by apple"
}
for (const key in myLang) {
    // console.log(key); // this will return key values
    console.log(`${key} shortcut is for ${myLang[key]}`);
    
}

//for in  --on Array
const arr = ["js", "cpp", "ruby", "swift"]
for (const key in arr) {
    console.log(arr[key]);
    
}