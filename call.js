//call method

const user1 = {
    firstName : "abc",
    age:9,
    about: function(){
        console.log(this.firstName, this.age);
    }
}
const user2={
    firstName:"pyq",
    age:6,
}

user1.about.call(user2);