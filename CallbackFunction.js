//in this program we are using callback function
//creating two function and calling another function in one function

function myFunc(callback){
    callback("Sudarsan")

}
function myFunc2(name){
    console.log(`Hello Everybody!,im ${name} and i'm learning javaScript`)
    
}
myFunc(myFunc2);