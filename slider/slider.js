const trackValue = document.getElementById("image-track");

window.onmousedown = e => {
    trackValue.dataset.mouseDownAt = e.clientX;
}

window.onmouseup = () => {
    trackValue.dataset.mouseDownAt = "0"
    trackValue.dataset.prevPercent = trackValue.dataset.percentage;
}



window.onmousemove = e => {
    if(trackValue.dataset.mouseDownAt === "0") return;
    
    const mouseDelta = parseFloat(trackValue.dataset.mouseDownAt) - e.clientX;
        maxDelta = window.innerWidth / 2;


        const percentage = (mouseDelta / maxDelta) * -100,
        nextPercentageUnconstrained = parseFloat(trackValue.dataset.prevPercent) + percentage,
        minPercentage = Math.min(nextPercentageUnconstrained, 0)
        nextPercentage = Math.max(minPercentage, -100);

        trackValue.dataset.percentage = nextPercentage;
        
        trackValue.animate(
            {transform: `translate(${nextPercentage}%, -50%)`}, 
            {duration: 1200, fill: "forwards"});
          
    for(const image of trackValue.getElementsByClassName("image")) {
        image.animate(
            {objectPosition: `${100 + nextPercentage}% center`}, 
            {duration: 1000, fill: "forwards"});
    }
}


