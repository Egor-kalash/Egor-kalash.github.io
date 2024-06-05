const body = document.getElementsByTagName("body");
const wordsContainer = document.getElementById("words");
let windowHeight = window.innerHeight;
let windowWidth = window.innerWidth;

window.onresize = () => {
  windowHeight = window.innerHeight;
  windowWidth = window.innerWidth;
  updateTextGrid();
};

function updateTextGrid() {
  let a = Math.floor(windowWidth / 170);
  let b = Math.floor(windowHeight / 18);
  let numberOfTexts = a * b;

  createAppearingText(numberOfTexts);
  preloadTextAnimations(3); // Simulate 3 cycles
}

function createAppearingText(n) {
  const text = "<div><span style='opacity: 0;'>The Voice</span></div>".repeat(n);
  wordsContainer.innerHTML = text;
}

function setRandomOpacity(element) {
  const num = Math.floor(Math.random() * 10);
  element.style.opacity = num >= 4 ? '0' : '.5';
}

function preloadTextAnimations(cycles) {
  const words = wordsContainer.children;
  let preloadPromises = [];

  for (let cycle = 0; cycle < cycles; cycle++) {
    for (let i = 0; i < words.length; i++) {
      preloadPromises.push(new Promise(resolve => {
        setTimeout(() => {
          if(cycle > 1){
            setRandomOpacity(words[i].children[0]);
          }
          resolve();
        }, Math.random() * 700 + 100); 
      }));
    }
  }

  Promise.all(preloadPromises).then(() => {
    startTextAnimations(); // Start regular animation after preloading
  });
}

function startTextAnimations() {
  const words = wordsContainer.children;

  for (let i = 0; i < words.length; i++) {
    (function(index) {
      const interval = Math.random() * 500 + 1500; // Interval between 1.5s and 2s
      setInterval(() => {
        setRandomOpacity(words[index].children[0]);
      }, interval);
    })(i);
  }
}

// Initial setup
updateTextGrid();

