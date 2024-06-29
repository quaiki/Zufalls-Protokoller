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
const interval = setInterval(() => {
animationContainer.textContent = selectedNames[currentIndex];
currentIndex = (currentIndex + 1) % selectedNames.length;
}, 100);

setTimeout(() => {
clearInterval(interval);
const randomName = selectedNames[Math.floor(Math.random() * selectedNames.length)];
animationContainer.textContent = randomName;
}, 3000);
});