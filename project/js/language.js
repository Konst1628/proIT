import lgData from "./languageInfo.js";

const lgId = new URLSearchParams(window.location.search).get('id');

const lg = lgData.find(lg => lg.id == lgId);

const logoText = document.querySelector('.logo_text');
const link = logoText.querySelector('a');
link.classList.add('a');
link.innerHTML = `Данные по ${lg.name}`;

const container = document.querySelector('.container');
container.classList.add('small_container');

const content = document.querySelector('.content');

const section1 = document.createElement('section');
section1.classList.add('section1');
const img = document.createElement('img');
img.classList.add('lg_img');
img.src = lg.img;
const p1 = document.createElement('p');
p1.textContent = lg.description;
section1.append(img, p1);


const section2 = document.createElement('section');
section2.classList.add('section2');

const div1 = document.createElement('div');
const div2 = document.createElement('div');

div1.classList.add('box');
div2.classList.add('box');

const title1 = document.createElement('p');
const title2 = document.createElement('p');

title1.classList.add('margin-bottom');
title2.classList.add('margin-bottom');

title1.textContent = 'Преимущества';
title2.textContent = 'Недостатки';

const list1 = document.createElement('ul');
const list2 = document.createElement('ul');

list1.classList.add('left-list');
list2.classList.add('right-list');
list1.classList.add('list');
list2.classList.add('list');

lg.advantages.forEach(text => {
    const listItem = document.createElement('li');
    listItem.textContent = text;
    list1.appendChild(listItem);
}); 

lg.disadvantages.forEach(text => {
    const listItem = document.createElement('li');
    listItem.textContent = text;
    list2.appendChild(listItem);
});

div1.append(title1, list1);
div2.append(title2, list2);

section2.append(div1, div2);


const section3 = document.createElement('section');
const p2 = document.createElement('p');
p2.textContent = lg.conclusion;
section3.append(p2);

const article = document.createElement('article');
const textForArticle = document.createElement('p');
textForArticle.textContent = 'Информация взята с ';

const a = document.createElement('a');
a.textContent = 'blog.uniwex.io';
a.setAttribute('class', 'link');
a.setAttribute('href', 'https://blog.uniwex.io/');

textForArticle.append(a);
article.append(textForArticle);

content.append(section1, section2, section3, article);

const div = document.createElement('div');
div.classList.add('button-container');

function createButtons() {
    const div = document.createElement('div');
    div.className = 'button-container';

    const lgButton = document.createElement('a');
    lgButton.className = 'button';
    lgButton.href = 'languages.html';
    lgButton.textContent = 'к ЯП';

    const prevButton = document.createElement('a');
    prevButton.className = 'button';
    prevButton.href = `language.html?id=${+lgId - 1}`;
    prevButton.textContent = 'Пред.';
    
    const nextButton = document.createElement('a');
    nextButton.className = 'button';
    nextButton.href = `language.html?id=${+lgId + 1}`;
    nextButton.textContent = 'След.';

    if (lgId == 1) {
        div.append(lgButton, nextButton);
    } else if (lgData.length == lgId) {
        div.append(prevButton, lgButton);
    } else {
        div.append(prevButton, lgButton, nextButton);
    }

    content.append(div);
}


createButtons();
