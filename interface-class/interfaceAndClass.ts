interface User{
    name:string
    userId:number
}

const u : User={name:"",userId:123}

interface User1{
    name:string
    startTime:()=>string
    endTime():number
    getCoupon(copNo:number):number;
}
const h:User1={
    name:"",
    startTime:()=>{return "2020"},
    endTime:()=>{return 2020},
    getCoupon:(copNo:number)=>{ return copNo}
}
interface User2{
    name:string
    startTime:()=>string
    endTime():number
    getCoupon(copNo:number):number;
}
interface User2{
    userId:number
}

const h1:User2={
    name:"",
    startTime:()=>{return "2020"},
    endTime:()=>{return 2020},
    getCoupon:(copNo:number)=>{ return copNo},
    userId:123
}

//Class

class User5{
    email:string
    name:string
    constructor(email:string,name:string){
        this.email=email;
        this.name=name;
    }
}

//Private

class User6{
    private email:string
    readonly name:string
    constructor(email:string,name:string){
        this.email=email;
        this.name=name;
    }

    get userName():string{
        return this.name;
    }
    set userEmail(email:string){ // no return type.void also
        this.email="h@h.com"
    }
}

const u4 = new User6("hh","d@hhh");
// console.log(u4.email);  we cant access private variables out side the class and in JS we use #email 

// u can also write like this to make code more concise

// class User7{
//     constructor(private email:string,
//         public name:string
//     )
//     {}
// }
const u2 = new User5("h","h@h.com");