// Function to show the age verification popup
function showAgeVerificationPopup() {
  var popup = document.getElementById("ageVerificationPopup");
  popup.style.display = "block";
}

// Function to hide the age verification popup
function hideAgeVerificationPopup() {
  var popup = document.getElementById("ageVerificationPopup");
  popup.style.display = "none";
}

// Function to verify age and decide whether to continue or go back
function verifyAge(isAgeValid) {
  hideAgeVerificationPopup();
  if (isAgeValid) {
    // Redirect to another page
    window.location.href = "age.html";
  } else {
    // Stay on the current page
  }
}

// Attach event listener to the button to show the age verification popup
document
  .getElementById("button")
  .addEventListener("click", showAgeVerificationPopup);
