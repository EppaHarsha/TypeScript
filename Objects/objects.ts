const user={
    name:"harsha",
    email:"h@h.com",
    isActive:true
}
    // function ():{}{}

function createCourse():{name:string,email:string,isActive:boolean}{
    return {name:"",email:"",isActive:true};
}

// Type

type User = {
    name:string
    email:string
    isActive:boolean
}
//here we simpled created a dataType 


function createUser(user:User):User{
    return {name:"harsha",email:"h@h.com",isActive:true}
}

createUser({name:"h",email:"",isActive:true});
// createUser({name:"",email:"",password:""})-shows an error that password is does not present in User

//ReadOnly KeyWord

type User2={
    readonly _id:string
    name:string
    rollNo:number
    isActive:boolean
}

let myUser:User2 = {
    _id:"123",
    name:"hh",
    rollNo:123,
    isActive:true
}
console.log(myUser._id);
//_id is readonly we cant modify the value of _id we can just read

type cardNumber={
    cardNumber:number
}
type cardName={
    cardName:string
}
type cardDate={
    cardDate:string
}

type cardDetails = cardDate & cardName & cardName 
type cardDetails2 = cardName & cardNumber & {
    cardEVV:number
}
export {};