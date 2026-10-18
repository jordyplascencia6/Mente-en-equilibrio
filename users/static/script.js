const container = document.querySelector(".container");
const btnSingIn = document.getElementById("btn-singin");
const btnSingUP = document.getElementById("btn-singup");

btnSingIn.addEventListener("click", ()=>{
     container.classList.remove('toggle');
});

btnSingUP.addEventListener("click", ()=>{
     container.classList.add('toggle');
});