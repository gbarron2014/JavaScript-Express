document.addEventListener('DOMContentLoaded', () => {

    function creaParrafo() {
      const para = document.createElement('p');
      para.textContent = 'Me hiciste Clic!';
      document.body.appendChild(para);
    }
  
    const buttons = document.querySelectorAll('button');
  
    for (const button of buttons) {
      button.addEventListener('click', creaParrafo);
    }
  });

  function cambiaColor () {
      const boton = document.getElementById('buttonColor');
    
      boton.style.color = "#" + Math.floor(Math.random()*16581375).toString(16);
    
  }
  