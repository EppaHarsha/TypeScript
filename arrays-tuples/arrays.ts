
    // syntax
    // let variableName : dataType[] = [];
    // let variableName:Array<dataType>=[];
let arr:number[] = [1,2,3,4,5];
console.log(arr);

const superHeros:number[] =[]
superHeros.push(1);
superHeros.push(2);
console.log(superHeros);

const sp2:Array<number> = [];
sp2.push(1);
sp2.push(3);
console.log(sp2);

type User={
    name:string,
    age:number
    email:string
    isActive:boolean,
}

const user1:User[] =[];
user1.push({name:"h",age:25,email:"h@h.com",isActive:true})
user1.push({name:"s",age:25,email:"h@s.com",isActive:true})
user1.push({name:"k",age:25,email:"h@k.com",isActive:true})
console.log(user1);
console.log(user1[0].name);

const sp3 :number[][]=[];
sp3.push([1,2,3]);
sp3.push([33,32,34]);

console.log(sp3[0]);


//Tuple
let tup: [number, string, boolean] = [1, "hello", true];

tup=[22,"sathvik",true]

let check : [string,boolean]

check=["hello",true];

let rgb :[number,number,number]=[122,122,122];
console.log(rgb);






export {};