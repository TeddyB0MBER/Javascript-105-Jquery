//selectors
function User( email, password, first, last, age, address, phone, payment, color,){

    this.email = email;
    this.password = password;
    this.first = first;
    this.last = last;
    this.age = age;
    this.address = address;
    this.phone = phone;
    this.payment = payment;
    this.color = color;
}

function isValid(user){
    let valid=true;
    if(user.email==""){
    valid=false;
}
return valid;
}
function register(){
 //when usng jquery with .val() at the end, make sure it is within the function so you dont have have to add ,value to letUser
let inputEmail = $("#txtEmail").val();
let inputPassword = $("#txtPassword").val();
let inputFirst = $("#txtFirst").val();
let inputLast = $("#txtLast").val();
let inputAge = $("#txtAge").val();
let inputAddress = $("#txtAddress").val();
let inputPhone = $("#txtPhone").val();
let inputPayment = $("#selPayment").val();
let inputColor = $("#selColor").val();

    let user = new User( inputEmail, inputPassword, inputFirst, inputLast, inputAge, inputAddress, inputPhone, inputPayment, inputColor);
    if(isValid(user)==true){
        saveUser(user);
        console.log(user);      
    } else { alert("please fill out Email")}
   
}
// Syntax for localStorage is setItem and getItem. like this-> localStorage.setItem("user1", "Tuong")
// localStorage.getItem("user1") will result in Tuong from above

let table = "";

function displayTable(aUser){
    let pTable = document.getElementById("tableUsers");
    table+= `
        <tr>
        <td> ${aUser.email} </td> 
        <td> ${aUser.first}</td>
        <td> ${aUser.last}</td>
        <td> ${aUser.age}</td>
        <td> ${aUser.phone}</td>
        </tr>
    `
     pTable.innerHTML = table;         
    }