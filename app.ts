import {IUser} from "./interfaces/userInterface";



function sum(a,b){
    return a+b
}
function showSum(a,b){
    console.log(a + b);
}

function incAge(someUser, inc){
    someUser.age+=inc
    return someUser
}

console.log(sum(1, 2));
showSum(2,3)
incAge(user, 2)