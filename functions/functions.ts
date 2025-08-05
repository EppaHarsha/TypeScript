// syntax 
// function functionName (variable:type):return type {};

function addTwo(a:number,b:number):number{
    return a+b;
    // return "" this will not because we mentioned that we will return number.
}
console.log(addTwo(1,2));

function signUp(name:string,email:string,password:string){
    console.log(`name ${name}`)
    console.log(`email ${email}`)
    console.log(`password ${password}`)
}

signUp("harsha","h@h.com","h")

//default value

function loginUser(name:string,email:string,isPaid:boolean=false){
    console.log("login");
    console.log(`name ${name} , email ${email} , isPaid ${isPaid}`);
}
loginUser("harsha","h@h.com");

// Arrow function
    let userLogin = (name:string,email:string,isPaid:boolean=false)=>{

    }
    userLogin("harsha","h@h.com",true);
    userLogin("harsha","h@h.com");//default argument 

    // function getValue(myVal:number):{
    //     if(myVal>5){
    //         return true;
    //     }
    //     return "200k";
    // }

    const heroes = ["hulk","spiderman","ironMan"]
    //we dont need to mention type for hero.Its automatically detects hero var according to the hero
    heroes.map(hero=>console.log(`hero ${hero}`));

    const h =[1,2,3,4]
    // mentoning type is not necessary
    h.map((n:number)=>{
        console.log(n);
    })
    h.map((n)=>{
        console.log(n);
    })

    function error(errMsg:string):void{
        console.log(errMsg);
    }


// The never type is used for values that should never exist.
// It's often used for functions that never return, or code paths that are impossible to reach.


    function handleError(errMsg:string):never {
        throw new Error(errMsg);
    }
    function infinteLoop(val:number):never{
        while(true){}
    }
export {};