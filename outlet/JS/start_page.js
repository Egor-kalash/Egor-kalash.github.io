const words = document.getElementById("words").children;
console.log(words);


// redu in react //
function createAppearingText(n){
  const container = document.getElementById("words");
  const text = "<div><span>Make Your Voice Sound</span></div>".repeat(n);
  container.innerHTML = text;
  //         <div><span>Make Your Voice Sound</span></div>
}


function hideUnnecessery(){
  for (let i = 0; i < words.length; i++) {
    const num = Math.floor(Math.random() * 10);
    if (num >= 4) {
      words[i].children[0].style.display = 'block';
      
    } 
    else {
      words[i].children[0].style.display = 'none';
    }
  }
}


function rotateScheam(){
  setInterval(() => {
    hideUnnecessery();
  }, 1000)
}
/* Start the Functions */
createAppearingText(100);
hideUnnecessery();
rotateScheam();