/* =====================================================
OASIS RIDGE - MAIN SCRIPT
===================================================== */

/* Loader */

window.addEventListener("load", function () {

const loader = document.getElementById("loader");

if (loader) {

loader.style.opacity = "0";

setTimeout(function () {

loader.style.display = "none";

}, 500);

}

});

/* Mobile Menu */

const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

if (menuToggle && navMenu) {

menuToggle.addEventListener("click", function () {

navMenu.classList.toggle("active");

});

document.querySelectorAll(".nav-menu a").forEach(function (link) {

link.addEventListener("click", function () {

navMenu.classList.remove("active");

});

});

}

/* Sticky Navbar */

const navbar = document.querySelector(".navbar");

if (navbar) {

window.addEventListener("scroll", function () {

if (window.scrollY > 80) {

navbar.style.background = "#0B1F35";
navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,.20)";

} else {

navbar.style.background = "rgba(11,31,53,.90)";
navbar.style.boxShadow = "none";

}

});

}

/* Back To Top */

const topBtn = document.getElementById("topBtn");

if (topBtn) {

window.addEventListener("scroll", function () {

if (window.scrollY > 400) {

topBtn.style.display = "block";

} else {

topBtn.style.display = "none";

}

});

topBtn.addEventListener("click", function () {

window.scrollTo({

top: 0,
behavior: "smooth"

});

});

}

/* Smooth Scroll */

document.querySelectorAll('a[href^="#"]').forEach(function(anchor){

anchor.addEventListener("click",function(e){

const target=document.querySelector(this.getAttribute("href"));

if(target){

e.preventDefault();

target.scrollIntoView({

behavior:"smooth"

});

}

});

});

/* Scroll Reveal */

const revealElements=document.querySelectorAll(

".overview-card,.service-card,.why-card,.material-box,.value-card,.contact-box,.fleet-item"

);

function revealOnScroll(){

const windowHeight=window.innerHeight;

revealElements.forEach(function(el){

const revealTop=el.getBoundingClientRect().top;

if(revealTop<windowHeight-100){

el.classList.add("fade-up");

}

});

}

window.addEventListener("scroll",revealOnScroll);

revealOnScroll();

/* Current Year */

const year=document.getElementById("year");

if(year){

year.textContent=new Date().getFullYear();

}

/* Disable Image Drag */

document.querySelectorAll("img").forEach(function(img){

img.setAttribute("draggable","false");

});

/* AOS */

if(typeof AOS!=="undefined"){

AOS.init({

duration:1000,

once:true

});

}

console.log("Oasis Ridge Website Loaded Successfully");