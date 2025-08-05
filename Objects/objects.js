"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user = {
    name: "harsha",
    email: "h@h.com",
    isActive: true
};
// function ():{}{}
function createCourse() {
    return { name: "", email: "", isActive: true };
}
//here we simpled created a dataType 
function createUser(user) {
    return { name: "harsha", email: "h@h.com", isActive: true };
}
createUser({ name: "h", email: "", isActive: true });
var myUser = {
    _id: "123",
    name: "hh",
    rollNo: 123,
    isActive: true
};
console.log(myUser._id);
