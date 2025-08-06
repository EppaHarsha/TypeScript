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

const u2 = new User5("h","h@h.com");