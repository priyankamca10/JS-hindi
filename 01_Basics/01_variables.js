const accountId = 45632
let accountEmail = "priyanka@google.com"
var accountPassword = "12345"
accountCity = "Thane"
let accountState;
//accountId = 67890 //not allowed const value cannot changes once declare

console.log(accountId);

accountEmail = "abhi@google.com"
accountPassword = "67890"
accountCity = "Jaipur"

console.table([accountId, accountEmail , accountPassword, accountCity, accountState])

/* prefer not to use var 
because of issue in block scope and functional scope*/