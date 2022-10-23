function saveUser(newUser){
    let oldUsers = readUsers();
    oldUsers.push(newUser);
    let val = JSON.stringify(oldUsers);//convert object to string
    localStorage.setItem('user', val); //setting the object as a string in the localStorage

}

function readUsers(){
    let users = localStorage.getItem(`user`); // extracting the setIten in the LocalStorage 
    console.log(users);
    if(!users){// ! = not users 
        //if you get here the LocalStorage is empty
        return []; //creating the empty array
    } else {
        let list = JSON.parse(users); //parse means to convert a string to an object
        console.log(list); 
        return list;
    }
}