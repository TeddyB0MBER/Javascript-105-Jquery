
function login(){
    //get tge values from the username and password
    let password = $("#inputPassword").val();
    let userName = $("#inputName").val();

    let users= readUsers(); // getting the users

    for(let i=0;users.length;i++){
        let user = users[i];

        if(user.password==password && user.email==userName){
            window.location="users.html";
        }
    }

}
