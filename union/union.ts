// Union Type
let userName : string | number;

userName="harsha";
userName=12

//userName=false shows error because false is not a string or number
function getStatus(status:number):string|number{
    if(status<5) return "bad Request"
    return 200
}

type User={
    name:string,
    id:number
}
type Admin={
    userName:string
    id:number
}

let user1 :User|Admin={
    name:"h",
    id:123
}
user1={userName:"h",id:111}

const num :(string|number)[] =[1.2,"34",3,"31"]; // we can store string and number in this array

let num2 :string[] | number[] =[1,2,3,4]; // we can store either string or number in this array

num2=['1','3','3323'];



let seatAllotment : "aisle" | "middle" | "window";
seatAllotment="aisle"
console.log(seatAllotment)
seatAllotment="middle"
console.log(seatAllotment)
seatAllotment="window"
console.log(seatAllotment);

export {};