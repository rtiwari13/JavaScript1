//inner HTML
const headLine = document.querySelector(".headline");
console.log(headLine);
headLine.innerHTML = "<h1>Inner HTML is changed </h1>";
headLine.innerHTML += "<button class = \"btn\">Learn more</button>"
console.log(headLine.innerHTML);
//        \" === "