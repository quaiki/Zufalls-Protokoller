document.getElementById('startButton').addEventListener('click', function() {
    const checkboxes = document.querySelectorAll('input[name="name"]:checked');
    const selectedNames = Array.from(checkboxes).map(cb => cb.value);

    if (selectedNames.length === 0) {
        alert("Bitte wählen Sie mindestens einen Namen aus.");
        return;
    }

    const animationContainer = document.getElementById('animationContainer');
    const soundEffect = document.getElementById('soundEffect');
    soundEffect.play();

    let currentIndex = 0;
    const totalDuration = 3000; // Gesamtdauer von 3 Sekunden
    const startTime = Date.now();
    const initialInterval = 50;
    const finalInterval = 300;
    let interval = initialInterval;

    const animate = () => {
        const elapsedTime = Date.now() - startTime;
        const progress = elapsedTime / totalDuration;

        // Lineare Interpolation zwischen initialInterval und finalInterval
        interval = initialInterval + (finalInterval - initialInterval) * progress;
        animationContainer.textContent = selectedNames[currentIndex];
        currentIndex = (currentIndex + 1) % selectedNames.length;

        if (elapsedTime < totalDuration) {
            setTimeout(animate, interval);
        } else {
            const randomName = selectedNames[Math.floor(Math.random() * selectedNames.length)];
            animationContainer.textContent = randomName;
            animationContainer.id = 'result';
        }
    };

    // Reset the result display before starting the new animation
    animationContainer.textContent = '';
    animationContainer.id = '';

    animate();
});
