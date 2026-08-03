

// Mobile menu

const menuToggle = document.querySelector(".menu-toggle");

const nav = document.querySelector("nav");


if(menuToggle){

menuToggle.addEventListener("click",()=>{

nav.classList.toggle("active");

});

}



// Scroll animation

const elements = document.querySelectorAll(".card,.intro,.cta");


window.addEventListener("scroll",()=>{


elements.forEach(element=>{


const position = element.getBoundingClientRect().top;


if(position < window.innerHeight - 100){

element.style.opacity="1";

element.style.transform="translateY(0)";


}


});


});