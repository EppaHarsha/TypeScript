"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Union Type
var userName;
userName = "harsha";
userName = 12;
//userName=false shows error because false is not a string or number
function getStatus(status) {
    if (status < 5)
        return "bad Request";
    return 200;
}
var user1 = {
    name: "h",
    id: 123
};
user1 = { userName: "h", id: 111 };
var num = [1.2, "34", 3, "31"]; // we can store string and number in this array
var num2 = [1, 2, 3, 4]; // we can store either string or number in this array
num2 = ['1', '3', '3323'];
var seatAllotment;
seatAllotment = "aisle";
console.log(seatAllotment);
seatAllotment = "middle";
console.log(seatAllotment);
seatAllotment = "window";
console.log(seatAllotment);
