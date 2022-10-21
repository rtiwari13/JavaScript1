//getters and setters
class getandSet{
    constructor (a,b,c){
        this.a =a;
        this.b=b;
        this.c=c;
    }
    get alpha(){
        return `${this.a} ${this.b}`
    }
    set alpha(alpha){
     const[a,b] = alpha.split(" "); 
     this.a=a;
     this.b=b;
    }
}

const var1 = new getandSet("xyz","jkl",9);
var1.alpha = "hjfhuhg jhjfg"
console.log(var1);