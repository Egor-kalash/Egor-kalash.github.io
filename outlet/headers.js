const readers = document.getElementById('readers');

// Store the original color
const originalColor = readers.style.color;

const burger = document.getElementById('burger');
const line1 = document.getElementById('line1');
const line2 = document.getElementById('line2');
const line3 = document.getElementById('line3');
// When the user scrolls down 50px from the top of the document, resize the header's font size

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("header").className = "slideUp"
    }
    else{
        document.getElementById("header").className = "upper_header";
    }
}

// Function to change the color to blue
function changeToBlue() {
    readers.innerHTML = " 202";
}

let a = "hello"

// Function to revert to the original color
function revertToOriginalColor() {
    readers.innerHTML = a;
}

// Attach the event handlers
readers.addEventListener("mouseover", changeToBlue);
readers.addEventListener("mouseout", revertToOriginalColor);

function Pressed() {
    line3.style.display = "none";
    line1.style.transform = "rotate(45deg)";
    line1.style.marginTop= "10px";
    line2.style.marginTop = "-7px";
    line2.style.transform = "rotate(-45deg)";
    // burger.style.marginTop = "7px"
}
