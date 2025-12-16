let button = document.querySelector(".nav-button");
let link= document.querySelector(".nav-link");

button.addEventListener("click", ()=>{
    link.classList.toggle("active");
});

