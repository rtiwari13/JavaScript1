//map method

const integ = [3,6,89,9,5];
const square = function (value){
    return value*value;              //return statement is important while using maps
}

const sqResult= integ.map(square);
console.log(sqResult);

const users =[
    {person: "abc", age:23},
    {person: "xyz", age:22},
    {person: "fgh", age:21}
]
const userNames = users.map((user) => {
    return user.person;
});
console.log(userNames);