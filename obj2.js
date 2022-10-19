//difference between bracket and dot notation
const key = "country";
const player = {
    name : "xyz",
    age:19,
   "list of games": ["a","b","c"]

}

console.log(player.age); //dot notation

console.log(player["list of games"]); //bracket notation
 
player[key] = "UAE";
console.log(player);