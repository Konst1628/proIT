import tests from "./testInfo.js";

const testsEl = document.querySelector('.tests');
const content = document.querySelector('main');

const searchInput = document.createElement('input');
searchInput.setAttribute('type', 'text');
searchInput.setAttribute('placeholder', 'Поиск тестов');
searchInput.addEventListener('input', handleSearch);
searchInput.classList.add('search');
const failSearch = document.createElement('p');
failSearch.textContent = 'По вашему запросу ничего не найдено.';
failSearch.style.display = 'none';

content.append(searchInput, failSearch);

const isTouchDevice = ('ontouchstart' in window) || (navigator.msMaxTouchPoints > 0);

const notes = tests.map(test => {
    const container = document.createElement('div');
    container.classList.add('test');
    container.id = test.name;

    const link = document.createElement('a');
    link.href = `test.html?id=${test.id}`;
    link.classList.add('image-button');
    link.textContent = 'Начать тест';
    
    container.style.backgroundImage = test.img;
    container.append(link);

    if(isTouchDevice) {
        const imageButton = container.querySelector('.image-button');
        imageButton.style.opacity = 1;
    }
  
    return container;
});


if (!isTouchDevice) {
    testsEl.addEventListener('mouseover', function (event) {
        if (event.target.classList.contains('test')) {
            const imageButton = event.target.querySelector('.image-button');
            imageButton.style.opacity = '1';
        }
        if (event.target.classList.contains('image-button')) {
            event.target.style.opacity = '1';
        }
    });
      
    testsEl.addEventListener('mouseout', function (event) {
        if (event.target.classList.contains('test')) {
            const imageButton = event.target.querySelector('.image-button');
            imageButton.style.opacity = '0';
        }
        if (event.target.classList.contains('image-button')) {
            event.target.style.opacity = '0';
        }
    });
}

function handleSearch(event) {
    const search = event.target.value.toLowerCase();
    const testElements = document.querySelectorAll('.test');
    const filtered = tests.filter(test => test.name.startsWith(search));
    const testNames = filtered.map(test => test.name);
    
    let flag = true;
    testElements.forEach(e => {
        if(!testNames.includes(e.id)) {
            e.style.display = 'none';
        } else {
            flag = false;
            e.style.display = '';
        }
    })

    if(flag) {
        failSearch.style.display = ''
    } else {
        failSearch.style.display = 'none'
    }

}

const placeholder = document.createElement('div');
placeholder.classList.add('placeholder');

testsEl.append(searchInput, placeholder, ...notes);