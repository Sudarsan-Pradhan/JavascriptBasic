//Default parameters Example

function addTwo(num1,num2){
    if(typeof num2 === "undefined"){
        num2=1;
    }
    return num1+num2;
}
const ans = addTwo(6)
console.log(ans);