//Rest Parameters
//in this programm we add sum of all numbers by using Rest Parameter

function addAllNum(...numbers){
    let Total = 0;
    for(let number of numbers){

        Total = Total+number;
    }
    return Total;
}
    const sum = addAllNum(2,3,4,5,1,23,89,65);
    console.log(sum);