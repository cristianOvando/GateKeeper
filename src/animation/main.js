// main.js
export function activarContenedor() {
    const container = document.querySelector('.container');
    container.classList.add('active');
  }
  
  export function desactivarContenedor() {
    const container = document.querySelector('.container');
    container.classList.remove('active');
  }
  