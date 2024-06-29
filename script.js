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
    const totalDuration = 4000; // Total duration of 4 seconds
    const startTime = Date.now();
    const initialInterval = 50;
    const finalInterval = 300;
    let interval = initialInterval;

    const animate = () => {
        const elapsedTime = Date.now() - startTime;
        const progress = elapsedTime / totalDuration;

        // Linear interpolation between initialInterval and finalInterval
        interval = initialInterval + (finalInterval - initialInterval) * progress;
        animationContainer.textContent = selectedNames[currentIndex];
        currentIndex = (currentIndex + 1) % selectedNames.length;

        if (elapsedTime < totalDuration) {
            setTimeout(animate, interval);
        } else {
            const randomName = selectedNames[Math.floor(Math.random() * selectedNames.length)];
            animationContainer.textContent = randomName;
            animationContainer.id = 'result';

            // Save result to localStorage (or send to server in a real application)
            const log = `Datum: ${new Date().toLocaleString()}, Name: ${randomName}\n`;
            let logHistory = localStorage.getItem('logHistory') || '';
            logHistory += log;
            localStorage.setItem('logHistory', logHistory);
        }
    };

    animate();
});
