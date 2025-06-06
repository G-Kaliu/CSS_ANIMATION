const btn = document.getElementById('animateBtn');

// On page load, retrieve saved button color from localStorage
window.onload = () => {
  const savedColor = localStorage.getItem('buttonColor');
  if (savedColor) {
    btn.style.backgroundColor = savedColor;
  }
};

// Function to animate button and save a new random color
function animateButton() {
  // Add animation class
  btn.classList.add('animate');
  
  // Remove animation class after animation ends (to allow re-trigger)
  btn.addEventListener('animationend', () => {
    btn.classList.remove('animate');
  }, { once: true });

  // Generate a new random color
  const newColor = getRandomColor();
  btn.style.backgroundColor = newColor;

  // Save new color in localStorage
  localStorage.setItem('buttonColor', newColor);
}

// Utility function to generate random hex color
function getRandomColor() {
  return '#' + Math.floor(Math.random()*16777215).toString(16);
}

// Attach click event to button
btn.addEventListener('click', animateButton);
