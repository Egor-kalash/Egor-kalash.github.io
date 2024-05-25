

const body = document.getElementsByTagName("body");
const words = document.getElementById("words").children;
let windowHeight = window.innerHeight;
let windowWidth = window.innerWidth;
const timer = ms => new Promise(res => setTimeout(res, ms));


window.onresize = () => {
  windowHeight = window.innerHeight;
  windowWidth = window.innerWidth;
};

let a = Math.floor(windowWidth / 170);
let b = Math.floor((windowHeight)/ 18);
let numberOfTexts = a * b;

createAppearingText(numberOfTexts);
// redu in react //
function createAppearingText(n){
  const container = document.getElementById("words");
  const text = "<div><span>The Voice</span></div>".repeat(n);
  container.innerHTML = text;
  //         <div><span>Make Your Voice Sound</span></div>
}


async function hideUnnecessery(){
  for (let i = 0; i < words.length; i++) {
    const num = Math.floor(Math.random() * 10);
      if (num >= 5) {
        words[i].children[0].style.opacity = '0';
        
      } 
      else {
        words[i].children[0].style.opacity = '.5';
      }
    await timer(0.5);
  }
}


function hideInitial(){
  for (let i = 0; i < words.length; i++) {
    const num = Math.floor(Math.random() * 10);
      if (num >= 5) {
        words[i].children[0].style.opacity = '0';
        
      } 
      else {
        words[i].children[0].style.opacity = '.5';
      }
  }
}

function rotateScheam(){
  hideInitial();
  setInterval(() => {
    hideUnnecessery();
  }, words.length)
}
/* Start the Functionsq */

rotateScheam();

