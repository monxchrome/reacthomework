export interface IUser {
    name: string;
    age: number;
    gender: string
}

let user = {
    name: 'vasya',
    age: 12,
    gender: 'male'
}


function sum(a:number,b:number):number {
    return a+b
}

function showSum(a:number, b:number):void {
    console.log(a + b);
}

function incAge(someUser:IUser, inc:number):object{
    someUser.age+=inc
    return someUser
}

console.log(sum(1, 2));
showSum(2,3)
incAge(user, 2)