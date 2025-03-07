
const dayColors = {
    Monday: ["#e74c3c", "#f1c40f", "#2ecc71"],      
    Tuesday: ["#3498db", "#9b59b6", "#e67e22"],       
    Wednesday: ["#1abc9c", "#16a085", "#27ae60"],     
    Thursday: ["#9b59b6", "#8e44ad", "#34495e"],      
    Friday: ["#f39c12", "#d35400", "#e67e22"],         
    Saturday: ["#e67e22", "#e74c3c", "#c0392b"],       
    Sunday: ["#2ecc71", "#27ae60", "#16a085"]         
  };
  
  const dayBox = document.getElementById('day-box');
  const dayButtons = document.querySelectorAll('.buttons-container button');
  
  dayButtons.forEach(button => {
    button.addEventListener('click', () => {
      const day = button.getAttribute('data-day');
      const colors = dayColors[day];
  
      
      dayBox.textContent = day;
  
      
      dayBox.style.setProperty('--start-color', colors[0]);
      dayBox.style.setProperty('--mid-color', colors[1]);
      dayBox.style.setProperty('--end-color', colors[2]);
  
      
      dayBox.classList.remove('animate');
      void dayBox.offsetWidth;
      dayBox.classList.add('animate');
    });
  });
  