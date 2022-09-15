 // strings in javascript

//declare it;
let strings = "monstEnergy";
console.log(strings[0]);
console.log(strings[6]);
console.log(strings[5]);

//string length
let bigString = "beingPerfectisGood";
console.log(bigString.length);
 
//access last index
console.log(bigString.length-1);

// remove extra spaces
let myString = "    papaya   ";
console.log(myString.length);
myString.trim();
console.log(myString.length); //immutable behavior
 let myNewString= myString.trim();
 console.log(myNewString);
 console.log(myNewString.length);//this works better

 //without creating a new string do this
 myString = myString.trim();
 console.log(myString);
 console.log(myString.length)//goood way

 //change in uppercase
 let first = "sensitive";
first = first.toUpperCase(); //works
 console.log(first);

 let animal="ELEPHANT";
animal= animal.toLowerCase();
console.log(animal); //works so good

// access a part of string
 let key = "anyvalueisneededhere";
  key = key.slice(0,4);
  console.log(key);

  //concatenation in string
let str1 = "my_power_";
let str2 = "is_me";
let  str3 = str1 + str2;
console.log(str3);
let str4 = str3 + " " + "true";// add some spaace
console.log(str4);

//some calculation via string to number conversion
let stringA = "16";
let stringB = "90";
let stringC =  +stringA +  +stringB;
console.log(stringC);

// backticks in action
let g = 19;
let hisName = "peter piper";
let about = `this is ${hisName} and my age is ${g}`;
console.log(about);