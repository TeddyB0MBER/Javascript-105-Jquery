function saveUser(newUser){
    console.log(newUser);
    let val = JSON.stringify(newUser);//convert object to string
    localStorage.setItem('user', val);

}