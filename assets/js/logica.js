const progressBar = document.getElementById('progress-bar');
const progressButton = document.getElementById('progress-button');
let progress = 0;

progressButton.addEventListener('click', () => {
    if (progress < 100) {
        progress += 10;
        progressBar.style.width = progress + '%';
    }

    if (progress === 100) {
        progressButton.disabled = true;
        progressButton.innerText = 'Completado';
    }
});
