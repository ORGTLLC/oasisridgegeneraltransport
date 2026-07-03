/* =====================================================
COUNTER ANIMATION
===================================================== */

const counters = document.querySelectorAll(".counter");

const speed = 200;

const startCounter = () => {

counters.forEach(counter => {

const target = +counter.getAttribute("data-target");

const updateCounter = () => {

const count = +counter.innerText;

const increment = Math.ceil(target / speed);

if (count < target) {

counter.innerText = count + increment;

setTimeout(updateCounter, 15);

} else {

counter.innerText = target;

}

};

updateCounter();

});

};

/* =====================================================
START COUNTER WHEN VISIBLE
===================================================== */

const counterSection = document.querySelector(".counter-section");

if (counterSection) {

const observer = new IntersectionObserver((entries) => {

entries.forEach(entry => {

if (entry.isIntersecting) {

startCounter();

observer.unobserve(counterSection);

}

});

}, {

threshold: 0.5

});

observer.observe(counterSection);

}

/* =====================================================
END OF COUNTER.JS
===================================================== */