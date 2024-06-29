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
    let animationDuration = 2000; // Änderung der Animationsdauer auf 2 Sekunden (2000 Millisekunden)
    let intervalTime = 100; // Intervallzeit in Millisekunden
    let animationStep = Math.floor(animationDuration / intervalTime); // Anzahl der Schritte

    clearInterval(interval); // Vorheriges Intervall löschen

    interval = setInterval(() => {
        animationContainer.textContent = selectedNames[currentIndex];
        currentIndex = (currentIndex + 1) % selectedNames.length;
        animationStep--;

        // Geschwindigkeit der Animation: Erst schnell, dann langsamer
        if (animationStep <= Math.floor(selectedNames.length / 2)) {
            intervalTime += 50; // Intervallzeit erhöhen für langsameren Wechsel
        }

        if (animationStep === 0) {
            clearInterval(interval);
            animationContainer.style.color = 'green'; // Ergebnis grün einfärben
        }
    }, intervalTime);

    // Zurücksetzen der Farbe nach 3 Sekunden
    setTimeout(() => {
        animationContainer.style.color = '#fff'; // Standardfarbe wiederherstellen
    }, 3000);
});
