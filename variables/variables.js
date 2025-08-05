"use strict";
// syntax - let variableName : type = value
Object.defineProperty(exports, "__esModule", { value: true });
// type is in lowercase
var greeting = "harsha";
console.log(greeting);
var num = 6;
console.log(num);
var isLoggedIn = false;
console.log(isLoggedIn);
// Type inference - we assigned a number to a variables so ts automatically convert to number type
var userId = 1234;
console.log(typeof userId);
// here we didn't assign anything so it takes name as any type
var name;
console.log(name);
