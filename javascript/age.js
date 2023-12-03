document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("button1").addEventListener("click", function () {
    var selectedAge = document.getElementById("age").value;
    var ageNumber = parseInt(selectedAge);

    if (ageNumber < 3 || ageNumber > 6) {
      openPopup();
    } else if (ageNumber == 3) {
      window.location.href = "age3.html";
      // Add additional actions here
    } else if (ageNumber == 4) {
      window.location.href = "age4.html";
      // Add additional actions here
    } else if (ageNumber == 5) {
      window.location.href = "age5.html";
      // Add additional actions here
    } else if (ageNumber == 6) {
      window.location.href = "age6.html";
      // Add additional actions here
    }
  });
});

function openPopup() {
  document.getElementById("popup").style.display = "block";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

document.getElementById("backButton").addEventListener("click", function () {
  // Navigate to another page when the "BACK" button is clicked
  window.location.href = "index.html";
});
