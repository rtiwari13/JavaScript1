const rootNode = document.getRootNode();
console.log(rootNode); //it will return document
console.log(rootNode.childNodes);// it will return nodelist

//since nodelist is an array like object so we can traverse it
console.log(rootNode.childNodes[0]);

const headElementNode = htmlElementNode.childNodes[0];
const textNode1 = htmlElementNode.childNodes[1];
const bodyElement = htmlElementNode.childNodes[2];
console.log(headElementNode.nextSibling);