const user = {
    Id : 1,
    firstName : "Sudarsan"

}

const user2 = {
    Id : 2,
    firstName : "Soubhagya"

}

const addUserInfo = new Map();
 addUserInfo.set(user,{age: 23, gender: "Male"})
 addUserInfo.set(user2,{age: 21, gender: "Male"})
 console.log("first user's Name :"+ user.firstName)
 console.log("first user's Gender :"+ addUserInfo.get(user).gender);
 console.log("Second user's Name :"+ user2.firstName)
 console.log("second users Age : "+ addUserInfo.get(user2).age);