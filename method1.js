function userInfo (){
    console.log(`person name is ${this.firstName} and person age is ${this.age}`);
}

const user1 ={
    firstName :"abc",
    age : 12,
    about : userInfo,
}
const user2 = {
    firstName:"xyz",
    age:13,
    about:userInfo,
}
const user3 ={
    firstName:"pyq",
    age:89,
    about:userInfo
}
user1.about();