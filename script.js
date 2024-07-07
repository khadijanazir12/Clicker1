document.addEventListener('DOMContentLoaded', (event) => {
    let points = 0;
    const pointsDisplay = document.getElementById('points');
    const clickButton = document.getElementById('clickButton');

    clickButton.addEventListener('click', () => {
        points++;
        pointsDisplay.textContent = points;
    });
});
