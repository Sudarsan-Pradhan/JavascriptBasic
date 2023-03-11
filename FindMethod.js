const users = [
    {userID: 1 , userName: "Sudarsan Pradhan"},
    {userID: 2, userName: "Soubhagya Pradhan"},
    {userID: 3 , userName: "Sanjit"},
    {userID: 4 , userName: "Sourav"}

]

const userDetails = users.find((user) => user.userID === 3);
console.log(userDetails); // it will return { userID: 3, userName: 'Sanjit' }