let button = document.querySelector('button');
let Generator=document.getElementById('Generator')


const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234456789!@#$%^&*()"

const passwordLength = 12;

function passwordGenerator(){
    let passwords="";
    for(let i=0; i < passwordLength; i++){
        passwords += characters.charAt(Math.floor(Math.random()* characters.length));
    }
Generator.value=passwords;
}



// let button = document.querySelector('button');
// let Generator = document.getElementById('Generator');

// const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

// const passwordLength = 12;

// function passwordGenerator() {
//   let password = "";
//   for (let i = 0; i < passwordLength; i++) {
//     password += characters.charAt(Math.floor(Math.random() * characters.length));
//   }
//   Generator.value = password;
// }




