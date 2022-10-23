function displayUsers(usersArray){
    let table="";
    for(let i=0; i<usersArray.length; i++){

        let user = usersArray[i];
    table+= `
        <tr>
        <td> ${user.email} </td> 
        <td> ${user.first}</td>
        <td> ${user.last}</td>
        <td> ${user.age}</td>
        <td> ${user.phone}</td>
        </tr>
    `
    $("#tableUsers").append(table);
    }
     
}

function init(){
    console.log("Listing the Users");
    let users = readUsers(); // getting the users from the lcoal stroage
    displayUsers(users);//display the user
}
window.onload=init;