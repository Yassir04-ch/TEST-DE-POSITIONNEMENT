const form = document.getElementById("form");
const nameinp = document.getElementById("name");
const email = document.getElementById("email");
const telephone = document.getElementById("telephone");
const match = document.getElementById("match");
const nticket = document.getElementById("nticket");
const errurname = document.getElementById("errurname");
const erruremail = document.getElementById("erruremail");
const errurtele = document.getElementById("errurtele");
const errurmatch = document.getElementById("errurmatch");
const errurticket = document.getElementById("errurticket");
const success = document.getElementById("success");

form.addEventListener('submit',function(e){
    e.preventDefault();
let nametest = /^[A-Za-z\s]{3,}$/;
let emailtest = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/;
if(!nametest.test(nameinp.value)){
   errurname.textContent = "nom au moins 3 caractere";
}
if(!emailtest.test(email.value)){
   email.textContent = "email non valide";
}
if(telephone.value.length > 10 || telephone.value.length < 10){
    errurtele.textContent = "telephone non valide min 3 nombre et max 10";
}

if(match.value.trim() === ""){
errurmatch.textContent ="selecte un match";
}

if(nticket.value < 1 || nticket.value > 10){
    errurticket.textContent ="le nombre de tocket entre 1 et 10";
}
else{
    errurticket.textContent ="";
    errurtele.textContent = ""
    erruremail.textContent = ""
    errurname.textContent = ""
    errurmatch.textContent ="";
    success.textContent = "reservation efectué avec succès"
}


})
