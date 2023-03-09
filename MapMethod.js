//Map amethod

const users = [
    {firstName: "Sudarsan", Age:23},
    {firstName: "Soumya", Age:22},
    {firstName: "Soubhagya", Age:21},
    {firstName: "Shibji", Age:22}
]

const userNames = users.map((user) =>{ //using map method with Arrow function
    return user.firstName;

});
console.log(userNames);