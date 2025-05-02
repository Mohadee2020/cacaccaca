// Preloader mejorado
window.addEventListener('load', function() {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        // Forzar el repintado antes de la animación
        void preloader.offsetHeight;
        
        preloader.style.transition = 'opacity 0.5s ease';
        preloader.style.opacity = '0';
        
        setTimeout(() => {
            preloader.style.display = 'none';
            
            // Iniciar la funcionalidad específica de la página
            if (document.getElementById('countdown')) {
                initCountdown();
            } else if (document.getElementById('loginForm')) {
                initLogin();
            } else if (document.getElementById('step1')) {
                initTour();
            }
        }, 500);
    }
});

// Cuenta regresiva optimizada
function initCountdown() {
    const countdownElement = document.getElementById('countdown');
    const countdownContainer = document.getElementById('countdown-container');
    const particlesContainer = document.getElementById('particles');
    
    countdownContainer.classList.add('animated-gradient');
    
    let count = 192;
    let speed = 50;
    let interval;
    
    function updateCountdown() {
        if (count < 0) return;
        
        countdownElement.textContent = count;
        createParticles(particlesContainer);
        
        if (count === 0) {
            clearInterval(interval);
            countdownElement.textContent = "Allá vamos!!!";
            countdownElement.classList.add('text-6xl', 'animate-pulse');
            
            setTimeout(() => {
                window.location.href = 'login.html';
            }, 2000);
            return;
        }
        
        // Ajustar velocidad progresivamente
        if (count <= 30) speed = 100;
        if (count <= 10) speed = 200;
        if (count <= 5) speed = 400;
        
        count--;
        
        clearInterval(interval);
        interval = setInterval(updateCountdown, speed);
    }
    
    // Iniciar con pequeño retraso para asegurar visibilidad
    setTimeout(() => {
        interval = setInterval(updateCountdown, speed);
    }, 100);
}

// Resto del código permanece igual...
[El resto de tus funciones createParticles, initLogin, initTour, etc.]