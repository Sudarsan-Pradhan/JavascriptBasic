class Dog {
    constructor(Name,Age){
        this.Name = Name;
        this.Age = Age;
    }
    eat(){
        return `${this.Name} is ${this.Age} years of old`
    }
    isCute(){
        return this.Age <= 3;
    }
}

const puppy = new Dog("puppy",2)
console.log(puppy.eat());