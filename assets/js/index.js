let randomImageNumber = Math.floor(Math.random() * 9) + 1;

const image = document.createElement('img');
image.className = 'car';
image.src = `assets/images/${randomImageNumber}.jpg`;
image.alt = 'car';
const button = document.createElement('button');
button.className = 'btn-car';
button.textContent = 'Click';

button.addEventListener('click', function () {
    if (image) {
        randomImageNumber = Math.floor(Math.random() * 9) + 1;
        const imagePath = `assets/images/${randomImageNumber}.jpg`;
        image.setAttribute('src', imagePath);
    } else {
        console.error('Image element not found.');
    }
});

document.body.appendChild(image);
document.body.appendChild(button);
