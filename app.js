document.addEventListener('mousemove', function(event) {
    const eyes = document.querySelectorAll('.eye');
    eyes.forEach(eye => {
        const rect = eye.getBoundingClientRect();
        const eyeCenterX = rect.left + rect.width / 2;
        const eyeCenterY = rect.top + rect.height / 2;
        const angle = Math.atan2(event.clientY - eyeCenterY, event.clientX - eyeCenterX);
        const pupil = eye.querySelector('.pupil');
        const maxPupilMove = (rect.width - pupil.offsetWidth) / 2;
        pupil.style.transform = `translate(${Math.cos(angle) * maxPupilMove}px, ${Math.sin(angle) * maxPupilMove}px)`;
    });
});