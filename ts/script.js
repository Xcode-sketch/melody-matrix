"use strict";
const whiteMode = document.querySelector('.theme');
const body = document.body;
const imageInput = document.querySelector('#image-input');
const createBtn = document.querySelector('#createBtn');
const tittleInput = document.querySelector('#input-tittle');
const durationInput = document.querySelector('#input-duration');
const cardContainer = document.querySelector('.card-storage');
function themeToggle() {
    const savedTheme = localStorage.getItem('current-theme');
    if (savedTheme === 'true') {
        body.classList.add('white-mode');
    }
}
whiteMode?.addEventListener('click', () => {
    const isTheme = body.classList.toggle('white-mode');
    localStorage.setItem('current-theme', String(isTheme));
    const themeIco = document.querySelector('#theme-ico');
    if (isTheme == true) {
        themeIco?.classList.remove('fa-sun');
        themeIco?.classList.add('fa-moon');
    }
    else {
        themeIco?.classList.remove('fa-moon');
        themeIco?.classList.add('fa-sun');
    }
});
themeToggle();
createBtn?.addEventListener('click', () => {
    const tittle = tittleInput?.value;
    const duration = durationInput?.value;
    const imageArchive = imageInput?.value;
    if (!tittle || !duration || !imageArchive) {
        alert("Por favor, preencha todos os campos antes de criar um card");
        return;
    }
    const reader = new FileReader();
    reader.onload = (event) => {
        const imageUrl = event.target?.result;
        cardCreate(tittle, duration, imageUrl);
        clearForm();
    };
});
function cardCreate(tittle, duration, imageUrl) {
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card');
    const image = document.createElement('img');
    image.src = imageUrl;
    const cardImage = document.createElement('div');
    cardImage.className = 'card-image';
    const cardText = document.createElement('div');
    cardText.className = 'card-text';
    const duracao = document.createElement('p');
    duracao.textContent = duration;
    const titulo = document.createElement('h3');
    titulo.textContent = tittle;
    cardImage.appendChild(image);
    cardText.appendChild(duracao);
    cardText.appendChild(titulo);
    cardDiv.appendChild(cardImage);
    cardDiv.appendChild(cardText);
    cardContainer?.appendChild(cardDiv);
}
function clearForm() {
    if (tittleInput)
        tittleInput.value = '';
    if (durationInput)
        durationInput.value = '';
    if (imageInput)
        imageInput.value = '';
}
