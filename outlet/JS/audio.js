// function playAudio() {
//   const audioElement = document.getElementById('intro');
//   const hiddenButton = document.getElementById('hiddenButton');

//   hiddenButton.addEventListener('animationend', async () => {
//       if (audioElement) {
//           try {
//               await audioElement.play();
//               console.log('Audio playing successfully.');
//           } catch (error) {
//               console.error('Error playing audio:', error);
//               promptUserInteraction();
//           }
//       }
//   });

//   // Trigger the CSS animation by adding the class
//   hiddenButton.classList.add('simulateClick');
// }

// function promptUserInteraction() {
//   const promptElement = document.createElement('div');
//   promptElement.innerHTML = `
//       <div style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background: rgba(0, 0, 0, 0.8); color: white; padding: 20px; border-radius: 10px; text-align: center;">
//           <p>Please click to play the audio</p>
//           <button id="playAudioButton">Play Audio</button>
//       </div>
//   `;
//   document.body.appendChild(promptElement);

//   const playButton = document.getElementById('playAudioButton');
//   playButton.addEventListener('click', () => {
//       const audioElement = document.getElementById('intro');
//       audioElement.play()
//           .then(() => {
//               console.log('Audio playing successfully.');
//               document.body.removeChild(promptElement);
//           })
//           .catch(error => {
//               console.error('Error playing audio:', error);
//           });
//   });
// }
