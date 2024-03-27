import lgData from "./languageInfo.js";

const element = document.querySelector('.languages');

const notes = lgData.map(lg => {
    const img = document.createElement('img');
    img.classList.add('language');
    img.classList.add('img');
    img.id = lg.name;
    img.src = lg.img;

    const link = document.createElement('a');
    link.href = `language.html?id=${lg.id}`;
    
    img.addEventListener('click', () => {
        window.location.href = link.href;
    });

    link.appendChild(img);
    return link;
});

element.append(...notes);