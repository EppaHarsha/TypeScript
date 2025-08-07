// function printAll(strs: string | string[] | null) {
//   if (typeof strs === "object") {
//     for (const s of strs) {
// // 'strs' is possibly 'null'.
//       console.log(s);
//     }
//   } else if (typeof strs === "string") {
//     console.log(strs);
//   } else {
//     // do nothing
//   }
// }

// Above case it is possiblr that string can be null and we know that null is a object.if str is null then How will we loop through it ?


function printAll(strs: string | string[] | null) {
  if ( strs && typeof strs === "object") {
    for (const s of strs) {
      console.log(s);
    }
  } else if (typeof strs === "string") {
    console.log(strs);
  } else {
    // do nothing
  }
}

// in operator 
type User8={
    name:string
    email:string
}
type Admin={
    name:string
    email:string
    isAdmin:boolean
}
function isAdminforAccount(account:User8|Admin){
    if("isAdmin" in account){
        return account.isAdmin;
    }
}

//Instance
function logDateOrString(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.getFullYear()); // Date
  } else {
    console.log(x.toUpperCase()); // string
  }
}
