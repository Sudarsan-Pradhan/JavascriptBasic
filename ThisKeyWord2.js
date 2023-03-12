function personInfo(){

    console.log(`person first Name is ${this.fName} and age is ${this.Age}`)

}

const person1 = {

    fName: "Sudarsan",
    Age : 23,
    about : personInfo
}
const person2 = {

    fName: "Soubhagya",
    Age : 21,
    about : personInfo
}
const person3 = {

    fName: "Rajesh",
    Age : 13,
    about : personInfo
}
const person4 = {

    fName: "Vivek",
    Age : 18,
    about : personInfo
}
person1.about()
person2.about()
person3.about()
person4.about()