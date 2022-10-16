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
    

function register(){
 //when usng jquery with .val() at the end, make sure it is within the function so yopu dont have have to add ,value to letUser
let inputEmail = $("#txtEmail").val();
let inputPassword = $("#txtPassword").val();
let inputFirst = $("#txtFirst").val();
let inputLast = $("#txtLast").val();
let inputAge = $("#txtAge").val();
let inputAddress = $("#txtAddress").val();
let inputPhone = $("#txtPhone").val();
let inputPayment = $("#selPayment").val();
let inputColor = $("#selColor").val();

    let theUser = new User( inputEmail, inputPassword, inputFirst, inputLast, inputAge, inputAddress, inputPhone, inputPayment, inputColor);

    console.log( theUser);

}