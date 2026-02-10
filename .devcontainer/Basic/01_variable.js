const accountID=1534345
let accountEmail="akshat@gmail.com"
var accountPassword="12345"
accountCity="U.P"


//accountID=2  //not allowed

accountEmail="abc@gmail.com"
accountPassword="abcd"
accountCity="Delhi"



console.log(accountID);
/* Prefer not to use var
   because of issue in block scope and functional scope 
 */


console.table([accountID,accountEmail,accountPassword,accountCity])
