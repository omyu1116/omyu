document.addEventListener('mousemove', function(e) {
    let light = document.querySelector('body');
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;
    
    light.style.setProperty('--mouse-x', x);
    light.style.setProperty('--mouse-y', y);
});

particlesJS('particles-js', {
    particles: {
        number: { value: 100 },
        size: { value: 3 },
        move: { enable: true, speed: 1 }
    },
    interactivity: {
        events: {
            onhover: { enable: true, mode: 'repulse' }
        }
    }
});
