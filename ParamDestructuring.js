//Param Destructuring

const person = {
    Name: "Sudarsan",
    age: 23,
    Company: "Wipro",
    Designation: "Project Engineer"
}
function findDetails({Name,age,Company,Designation}){
    console.log(Name)
    console.log(age)
    console.log(Company)

}
findDetails(person);