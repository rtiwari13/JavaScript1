//find method

const arr= ["some","text","here","like","abc","pyq"]

function isLength3(string){
    return string.length === 3;
}

// find method will look for first occurence only
const ans = arr.find(isLength3);
console.log(ans);

const users =[
    {userId:4, userName:"abc"},
    {userId:5,userName:"pyq"},
    {userId :9,userName:"opd"},
    {userId:6, userName:"klod"},
    {userId:12,userName:"csfd"}
]

 const userF = users.find((user)=>user.userId===9);
 console.log(userF);