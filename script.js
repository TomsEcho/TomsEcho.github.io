document.addEventListener('DOMContentLoaded', function() {
    const typewriter = document.getElementById('typewriter');
    const navigation = document.getElementById('navigation');
  
    // Hide the navigation initially
    navigation.style.display = 'none';
  
    // Typewriter Animation
    typewriter.addEventListener('animationend', function() {
      // Show the navigation once the typewriter animation is complete
      navigation.style.display = 'block';
      typewriter.style.borderRight = 'none';
      animationContainer.classList.add('fullscreen');
      // Hide the cursor by removing the border-right style
      setTimeout(function() {
        animationContainer.classList.remove('fullscreen');
      }, 3000); // Change the duration (in milliseconds) as desired

    });
  });
  