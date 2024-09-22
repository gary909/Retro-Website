/***************************SPLASH SCREEN Disk Image******************************** */

// document.addEventListener("DOMContentLoaded", function () {
//   // Set a timeout for 500 milliseconds (0.5 seconds)
//   setTimeout(function () {
//     var splash = document.getElementById("splash");
//     var mainContent = document.getElementById("main-content");

//     // Start the fade-out transition
//     splash.style.opacity = "0";

//     // After the transition duration, hide the splash and show the main content
//     setTimeout(function () {
//       splash.style.display = "none";
//       mainContent.style.display = "block";
//     }, 500); // Match this duration with the CSS transition
//   }, 500); // Initial display duration for the splash screen
// });

// script.js

document.addEventListener("DOMContentLoaded", function () {
  // Duration for each splash screen in milliseconds
  // const SPLASH_DURATION = 500; // 0.5 seconds per splash screen
  const SPLASH1_DURATION = 600; // 0.7 seconds for first splash
  const SPLASH2_DURATION = 1500; // 0.5 seconds for second splash

  // Get references to the splash screens and main content
  const splash1 = document.getElementById("splash1");
  const splash2 = document.getElementById("splash2");
  const mainContent = document.getElementById("main-content");

  // Function to fade out an element
  function fadeOut(element, callback) {
    element.style.opacity = "0";
    // Wait for the transition to complete before executing the callback
    setTimeout(() => {
      element.style.display = "none";
      if (callback) callback();
    }, 500); // Match this duration with the CSS transition (0.5s)
  }

  // Show the first splash screen for SPLASH_DURATION
  setTimeout(() => {
    fadeOut(splash1, () => {
      // After first splash screen fades out, show the second splash screen
      splash2.style.display = "flex"; // Using flex to center the image
      splash2.style.opacity = "1"; // Ensure it's fully visible

      // Show the second splash screen for SPLASH_DURATION
      setTimeout(() => {
        fadeOut(splash2, () => {
          // After second splash screen fades out, show the main content
          mainContent.style.display = "block";
        });
      }, SPLASH2_DURATION);
    });
  }, SPLASH1_DURATION);
});

//*************** Green CRT Text Splashscreen 2 *************
document.addEventListener("DOMContentLoaded", function () {
  const lines = document.querySelectorAll(".line");
  // const cursor = document.getElementById("cursor");

  let lineIndex = 0;
  let charIndex = 0;
  const typingSpeed = 5; // Speed of typing effect

  function typeCharacter() {
    if (lineIndex < lines.length) {
      let currentLine = lines[lineIndex].dataset.line;

      if (charIndex < currentLine.length) {
        lines[lineIndex].style.opacity = 1;
        lines[lineIndex].textContent += currentLine[charIndex];

        // Move the cursor to the correct position
        // const rect = lines[lineIndex].getBoundingClientRect();
        // const cursorX = rect.left + lines[lineIndex].offsetWidth + 2;
        // const cursorY = rect.top + window.scrollY; // Adjust for scrolling if any
        // cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;

        charIndex++;
        setTimeout(typeCharacter, typingSpeed);
      } else {
        lines[lineIndex].textContent += "\n";
        lineIndex++;
        charIndex = 0;
        setTimeout(typeCharacter, typingSpeed);
      }
    } else {
      // cursor.style.display = "none"; // Hide cursor when typing is complete
    }
  }

  typeCharacter();
});
