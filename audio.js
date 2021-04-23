let mySong = document.getElementById("mySong");
let icon = document.getElementById("icon"); 
let myVideo = document.getElementById("myVideo");
icon.onclick = function(){
mySong.play();
myVideo.play();
icon.hidden = true;
document.getElementsByClassName("icon").hidden = true;
}
