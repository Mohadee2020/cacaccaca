// Preloader
document.addEventListener('DOMContentLoaded', function() {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        setTimeout(() => {
            preloader.style.opacity = '0';
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 500);
        }, 1500);
    }

    if (document.body.contains(document.getElementById('countdown'))) {
        initCountdown();
    } else if (document.body.contains(document.getElementById('loginForm'))) {
        initLogin();
    } else if (document.body.contains(document.getElementById('step1'))) {
        initTour();
    }
});

// Cuenta regresiva con velocidad variable
function initCountdown() {
    const countdownElement = document.getElementById('countdown');
    const countdownContainer = document.getElementById('countdown-container');
    const particlesContainer = document.getElementById('particles');
    
    countdownContainer.classList.add('animated-gradient');
    
    let count = 192;
    let speed = 50; // Velocidad inicial (ms)
    let interval;
    
    function updateCountdown() {
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
        
        // Ajustar velocidad según el valor actual
        if (count <= 30) speed = 100;
        if (count <= 10) speed = 200;
        if (count <= 5) speed = 400;
        
        count--;
        
        // Reiniciar el intervalo con la nueva velocidad
        clearInterval(interval);
        interval = setInterval(updateCountdown, speed);
    }
    
    interval = setInterval(updateCountdown, speed);
}

function createParticles(container) {
    for (let i = 0; i < 3; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        const size = Math.random() * 5 + 3;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        const angle = Math.random() * Math.PI * 2;
        const distance = Math.random() * 50 + 30;
        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;
        
        particle.style.left = `calc(50% + ${x}px)`;
        particle.style.top = `calc(50% + ${y}px)`;
        
        const duration = Math.random() * 3 + 2;
        particle.style.animation = `float ${duration}s linear forwards`;
        
        container.appendChild(particle);
        
        setTimeout(() => {
            particle.remove();
        }, duration * 1000);
    }
}

// Animación de partículas
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        to {
            transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Resto del código (login y tour) permanece igual...
[El resto del código de scripts.js para login y tour permanece igual que en tu versión original]