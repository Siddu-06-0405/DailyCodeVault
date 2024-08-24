// const x: number = 1;
// console.log(x);
function hello(firstname: string): string{
    return firstname;
}
const SweetHeart = "Roshni";
console.log(hello(SweetHeart));

//Write a function that calculates sumof two functions
function add(a: number,b: number): number{
    return a+b;
}
console.log(add(4.5,5));

interface User{
    firstName : string;
    lastName : string;
    age: number;
    email?:string;
}

function isLegal(user: User):boolean{
    if(user.age>=18){
        return true;
    }else{
        return false;
    }
};
const vipUser:User = {
    firstName: "Roshni",
    lastName: "Ch.",
    age: 19
}
const writer:User = {
    firstName: "Aizen",
    lastName:"Sosuke",
    age: 696
}
console.log(isLegal(vipUser));
console.log(isLegal(writer));

//Change the target in the tsconfig file to 
// target : "es5" to run js in internet explorer
const greet = (name: string) => `Hello, ${name}!`
console.log(greet("Aizen-sama"));

//noImplicitAny
//rootDir/ ,  outDir/

function callBackAfter4S(cb: ()=> void){
    setTimeout(cb, 4000);
}
const unosDosTres = ()=>{console.log("Hala Madrid!")};
callBackAfter4S(unosDosTres);