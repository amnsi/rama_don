// Optional enhancement: Text typing effect
const text = "RAMA DON JI OPEN JEEP WAALE";
const animatedText = document.getElementById("animatedText");

let index = 0;

function typeEffect() {
    animatedText.textContent = text.substring(0, index);
    index++;
    if (index > text.length) {
        index = 0;  // Reset for infinite loop
    }
}

setInterval(typeEffect, 150);
