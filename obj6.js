//objects inside array

const person = [
    {personNo : 3 , firstperson : "abc",lastperson:"pyq"},
    {personNo : 4 , firstperson : "xyz",lastperson:"lmn"},
    {personNo : 5 , firstperson : "ors",lastperson:"lqy"}
]

console.log(person);
for(let i of person){
    console.log(i.personNo);
}
