// DIGITAL CLOCK
let hrs = document.getElementById('hr');
let min = document.getElementById('min');
let sec = document.getElementById('sec');
let period = document.getElementById('period');

setInterval(() => {
    let currentTime = new Date();

    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();

    let amPm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours ? hours : 12;

    hrs.innerHTML = (hours < 10 ? "0" : "") + hours;
    min.innerHTML = (minutes < 10 ? "0" : "") + minutes;
    sec.innerHTML = (seconds < 10 ? "0" : "") + seconds;
    period.innerHTML = amPm;
}, 1000);

// calender
let days = document.getElementById('day');
let months = document.getElementById('mon');
let years = document.getElementById('year');

setInterval(() => {
    let currentTime = new Date();

    let Days = currentTime.getDate();
    let Months = currentTime.getMonth();
    let Years = currentTime.getFullYear();

    days.innerHTML = (Days < 10 ? "0" : "") + Days;
    mon.innerHTML = (Months < 10 ? "0" : "") + Months;
    years.innerHTML = (Years < 10 ? "0" : "") + Years;
});

// Autoslide show
let firstIndex = 0;
function Autoslide() {
    setTimeout(Autoslide, 2000);
    var pics;
    const img = document.querySelectorAll('img');
    for (pics = 0; pics < img.length; pics++) {
        img[pics].style.display = 'none';
    }
    firstIndex++;
    if (firstIndex > img.length) {
        firstIndex = 1;
    }
    img[firstIndex - 1].style.display = 'block';
}
Autoslide()

// Typewriter animation
const typewriterText = "I am MERN developer";
let index = 0;
function typeWriter() {
    if (index < typewriterText.length) {
        document.getElementById('typewriter').innerHTML += typewriterText.charAt(index);
        index++;
        setTimeout(typeWriter, 100);
    }
}
window.onload = typeWriter;
