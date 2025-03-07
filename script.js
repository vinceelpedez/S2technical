
const dayBox = document.getElementById('day-box');


const dayButtons = document.querySelectorAll('button[data-day]');


dayButtons.forEach(button => {
  button.addEventListener('click', () => {
    
    const day = button.getAttribute('data-day');

    
    dayBox.textContent = day;

    
    dayBox.classList.remove('animate');
    
    
    void dayBox.offsetWidth;

    
    dayBox.classList.add('animate');
  });
});
