// Select the animated box
const dayBox = document.getElementById('day-box');

// Select all buttons
const dayButtons = document.querySelectorAll('button[data-day]');

// Add click events to each button
dayButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Get the day from the button's data attribute
    const day = button.getAttribute('data-day');

    // Update the box text
    dayBox.textContent = day;

    // Remove animation class if present to reset animation
    dayBox.classList.remove('animate');
    
    // Force reflow (so that removing the class is recognized before re-adding)
    void dayBox.offsetWidth;

    // Re-add the animation class to start the animation
    dayBox.classList.add('animate');
  });
});
