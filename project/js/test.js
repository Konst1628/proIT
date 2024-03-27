import tests from "./testInfo.js";

const testId = new URLSearchParams(window.location.search).get('id');

const test = tests.find(t => t.id == testId);

const logoText = document.querySelector('.logo_text');
const link = logoText.querySelector('a');
link.classList.add('a');
link.innerHTML = `Тест по ${test.name}`;

const container = document.querySelector('.container');
container.classList.add('small_container');

const content = document.querySelector('.content');

const notes = test.questions.map(question => {
    const questionDiv = document.createElement('div');
    questionDiv.classList.add('question');

    const p = document.createElement('p');
    p.textContent = question.question;
    questionDiv.append(p);

    question.answers.forEach(a => {
        const label = document.createElement('label');
        const input = document.createElement('input');
        const text = document.createTextNode(' ' + a);
    
        input.setAttribute('type', 'radio');
        input.setAttribute('name', question.id);
        input.setAttribute('value', a);

        label.append(input);
        label.append(text);

        questionDiv.append(label);
    });

    return questionDiv;
});

content.append(...notes);

const button = document.createElement('button');
button.textContent = 'Посмотреть результаты';
button.classList.add('button');
button.classList.add('button:focus');

button.onclick = function checkResult() {

    let rightAnswer = 0;

    for (let i = 1; i <= 6; i++) {
        const selectedAnswer = document.querySelector('input[name="' + i + '"]:checked').value;
        if(test.questions[i - 1].rightAnswer === selectedAnswer) rightAnswer++;
    }

    container.style.display = 'none';
    const resDiv = document.createElement('div');
    resDiv.classList.add('container_result');

    const squareDiv = document.createElement('div');
    squareDiv.classList.add('square');

    const h2 = document.createElement('h2');
    h2.textContent = `Ваш результат: ${rightAnswer}/6`;
    h2.style.color = 'aqua';
    h2.classList.add('result');

    const p = document.createElement('p');
    if(rightAnswer === 6) {
        p.textContent = 'Отличная работа!';
    } else {
        p.textContent = 'Есть что подучить!';
    }

    const button = document.createElement('button');
    button.textContent = 'К тестам!';
    button.classList.add('button');
    button.style.marginTop = '50%';
    button.onclick = () => window.location.href = 'tests.html';

    squareDiv.append(h2);
    squareDiv.append(p);
    squareDiv.append(button);
    resDiv.append(squareDiv);

    const body = document.querySelector("body");
    body.append(resDiv);
}

content.append(button);



