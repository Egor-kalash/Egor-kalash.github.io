function isSafari() {
  return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
}

// If the browser is not Safari, apply custom selection styles
if (!isSafari()) {
  const styleSheet = document.createElement("style");
  styleSheet.innerText = `
  *::selection {
    background-color: balck; /* Dark grey instead of pure black */
    color: #f1f1f1; /* Soft white instead of pure white */
  }
  div::selection, p::selection {
    background-color: black;
    color: #f1f1f1;
  }
  `;
  document.head.appendChild(styleSheet);
}

let count = [];

function Liked(clickedButton) {
    // Retrieve the cardHolder ID from the clicked button's data attribute
    const cardHolderId = clickedButton.getAttribute('data-cardholder-id');
    // Use the ID to get the specific cardHolder element
    const cardHolder = document.getElementById(cardHolderId);

    // Toggle the button and cardHolder appearance based on the clickedOn state
    if (cardHolder.dataset.clickedOnCard === "false") {
        clickedButton.style.color = "green";
        clickedButton.style.borderColor = "green";
        cardHolder.dataset.clickedOnCard = "true"; // Update the state to true
        count.push(cardHolderId)
    } else {
        clickedButton.style.color = "black";
        clickedButton.style.borderColor = "black";
        cardHolder.dataset.clickedOnCard = "false"; // Reset the state to false
        count = remove(cardHolderId, count);
    }
    console.log(count)
    return count;
}

function remove(likedId, likedIdList){
    let likedIdListrevised = [];
    for (let i=0; (i < likedIdList.length); i++){
        if (likedIdList[i] === likedId){
            continue;
        }
        likedIdListrevised.push(likedIdList[i])
    }
    return likedIdListrevised;
}


