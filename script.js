let interval; // Globale Variable für das Intervall

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
    let animationDuration = 2000; // Animationsdauer auf 2 Sekunden (2000 Millisekunden) gesetzt
    let intervalTime = animationDuration / selectedNames.length; // Intervallzeit berechnet
    let animationStep = 0;

    clearInterval(interval); // Vorheriges Intervall löschen

    interval = setInterval(() => {
        animationContainer.textContent = selectedNames[animationStep % selectedNames.length];
        animationStep++;

        if (animationStep === selectedNames.length) {
            clearInterval(interval);
            animationContainer.style.color = 'green'; // Ergebnis grün einfärben
        }
    }, intervalTime);

    // Zurücksetzen der Farbe nach 3 Sekunden
    setTimeout(() => {
        animationContainer.style.color = '#fff'; // Standardfarbe wiederherstellen
    }, 3000);
});

document.getElementById('resetButton').addEventListener('click', function() {
    location.reload(); // Seite neu laden für Reset
});
