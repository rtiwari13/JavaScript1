class Animal{
    constructor(name,age){
this.name =name;
this.age=age;
    }

    eat(){
        return `${this.name}  is eating`;
    }
    animAge(){
        return this.age <=1;
    }
    isBlack(){
        return true;
    }
}

const ani =  new Animal('tiger',2);
console.log(ani);
console.log(ani.isBlack())//true

//inheritance

class Tiger extends Animal{//this is subclass
   constructor (name,age,speed){
    super(name,age);
    this.speed=speed;
   }
   run(){
    return `${this.name} is running at speed ${this.speed}kmph`
   }
}
const tig1 = new Tiger ("tiggu",3,89);
console.log(tig1)
console.log(tig1.eat());
console.log(tig1.run())