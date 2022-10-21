//method

const user ={
    userId : 1,
    userName : "abc",
    about: function(){
        console.log(`user's Id is ${this.userId} and username is ${this.userName}`)
    }
}

user.about();