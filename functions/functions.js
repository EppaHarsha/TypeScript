"use strict";
// syntax 
// function functionName (variable:type):return type {};
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(a, b) {
    return a + b;
    // return "" this will not because we mentioned that we will return number.
}
console.log(addTwo(1, 2));
function signUp(name, email, password) {
    console.log("name ".concat(name));
    console.log("email ".concat(email));
    console.log("password ".concat(password));
}
signUp("harsha", "h@h.com", "h");
//default value
function loginUser(name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
    console.log("login");
    console.log("name ".concat(name, " , email ").concat(email, " , isPaid ").concat(isPaid));
}
loginUser("harsha", "h@h.com");
// Arrow function
var userLogin = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
userLogin("harsha", "h@h.com", true);
userLogin("harsha", "h@h.com"); //default argument 
// function getValue(myVal:number):{
//     if(myVal>5){
//         return true;
//     }
//     return "200k";
// }
var heroes = ["hulk", "spiderman", "ironMan"];
//we dont need to mention type for hero.Its automatically detects hero var according to the hero
heroes.map(function (hero) { return console.log("hero ".concat(hero)); });
var h = [1, 2, 3, 4];
// mentoning type is not necessary
h.map(function (n) {
    console.log(n);
});
h.map(function (n) {
    console.log(n);
});
