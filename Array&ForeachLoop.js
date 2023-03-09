const users = [
    {firstName: "Sudarsan", Age:23},
    {firstName: "Soumya", Age:22},
    {firstName: "Soubhagya", Age:21},
    {firstName: "Shibji", Age:22}
]

//users.forEach(function(user){   // Type 1, By using forEachloop
    //console.log(user.firstName);

//});

//for(let user of users){         //Type2, By using forloop
    //console.log(user.firstName)
//};

users.forEach((user) => {         //Type3, By using Arrow function
  
    console.log(user.firstName)

})


