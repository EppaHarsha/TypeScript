// syntax - let variableName : type = value

// type is in lowercase

let greeting:string = "harsha";
console.log(greeting);

let num:number=6
console.log(num);

let isLoggedIn : boolean = false;
console.log(isLoggedIn);

// Type inference - we assigned a number to a variables so ts automatically convert to number type
let userId = 1234
console.log(typeof userId);
// here we didn't assign anything so it takes name as any type
let name;
export{}
