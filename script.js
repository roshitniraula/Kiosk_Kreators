document.addEventListener("DOMContentLoaded", function() {
  //assigning for each button on the HTML Page
  var dialog = document.getElementById("myDialog");
  var goBackButton = document.getElementById("goBackButton");
  var continueButton = document.getElementById("continueButton");
  var startOver = document.getElementById("startOver");

  
  var inactivityTimer;

  function openDialog() {
    dialog.showModal();
    
    
    inactivityTimer = setTimeout(function() {
      dialog.close();
      window.location.href = "index.html"; // Redirect to the main page after 30 seconds of inactivity assigned to class
    }, 30000); 
  }

  // Reset the inactivity timer when the user interacts with the dialog box
  function resetInactivityTimer() {
    clearTimeout(inactivityTimer);
    inactivityTimer = setTimeout(function() {
      dialog.close();
      window.location.href = "index.html"; // Redirect to the main page assigned as index.html after 30 seconds of inactivity
    }, 30000); 
  }

  startOver.addEventListener("click", function() {
    window.location.href = "index.html"; // Redirect to the main page if start over button on top is pressed
  });

  goBackButton.addEventListener("click", function() {
    dialog.close();
    window.location.href = "index.html"; // Redirect to the start page if pressed go to main page in the dialogue box
  });

  continueButton.addEventListener("click", function() {
    dialog.close(); // Closes the dialog in the check-in page after "Continue" is pressed
    resetInactivityTimer(); // Reset the inactivity timer when the user interacts with the dialog
  });

  // Open the dialog initially after 5 seconds
  //button is hidden via css
  setTimeout(openDialog, 5000); // 5 second works as 5000 microseconds?
});