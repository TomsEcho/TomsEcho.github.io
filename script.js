document.addEventListener('DOMContentLoaded', function() {
    // Retrieve the elements with the typewriter and navigation classes
    var typewriterElement = document.querySelector('.typewriter');
    var navigationElement = document.querySelector('.navigation');
    var welcomeBodyElement = document.querySelector('.welcome-body');
    var wrapperElement = document.querySelector('.wrapper');
    var welcomeTextElement = document.querySelector('.welcome-container');
    var welcomeTitleElement = document.querySelector('.welcome-title');

    navigationElement.classList.add('hidden');
    welcomeTitleElement.style.display = 'none'; 
    var text = typewriterElement.textContent;
    typewriterElement.textContent = '';
    var charIndex = 0;
  
    // Function to display next character
    function displayNextCharacter() {
      if (charIndex < text.length) {
        typewriterElement.textContent += text.charAt(charIndex);
        charIndex++;
        if (charIndex === 3) { // Pause after typing "Hi,"
          clearInterval(typingInterval); // Stop the typing interval
          setTimeout(function() {
            typingInterval = setInterval(displayNextCharacter, typingSpeed); // Resume typing after the pause
          }, 500); // Adjust the pause duration (in milliseconds) as needed
        }
  
        if (charIndex === text.length) {
          typewriterElement.classList.remove('blink-caret');
          setTimeout(function() {
            typewriterElement.style.borderRight = 'none';
          }, 1000);
          setTimeout(function() {
            wrapperElement.style.display = "flex";
            welcomeBodyElement.style.height = '50px'; 
            welcomeBodyElement.style.animationDuration = "45s";
            navigationElement.classList.remove('hidden');
            welcomeTextElement.classList.add('hidden');
            welcomeBodyElement.style.alignItems = 'flex-start';
            welcomeTitleElement.classList.remove('hidden');
          }, 500);
        }
      } else {
        clearInterval(typingInterval);
            }
    }
      var typingSpeed = 75; // Adjust the typing speed by changing the value
    var typingInterval = setInterval(displayNextCharacter, typingSpeed);
  });
  