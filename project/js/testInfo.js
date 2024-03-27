const tests = [
    {
        id: 1,
        name: 'js',
        img: 'url(./img/test/js.png)',
        questions: [
            {
                id: 1,
                question: '1. Какая функция используется для вывода текста в консоль?',
                answers: ['alert()', 'print()', 'console.log()', 'log()'],
                rightAnswer: 'console.log()'
            },
            {
                id: 2,
                question: '2. Как объявить переменную в JavaScript?',
                answers: ['variable myVar', 'myVar = 10', 'let num = 10', 'double num = 4.2'],
                rightAnswer: 'let num = 10'
            },
            {
                id: 3,
                question: '3. Что такое DOM в контексте JavaScript?',
                answers: ['Data Object Model', 'Document Object Model', 'Data Operation Module', 'Document Operation Model'],
                rightAnswer: 'Document Object Model'
            },
            {
                id: 4,
                question: '4. Какая функция используется для добавления элемента в конец массива?',
                answers: ['pop()', 'push()', 'shift()', 'unshift()'],
                rightAnswer: 'push()'
            },
            {
                id: 5,
                question: '5. Какая функция используется для получения случайного числа в определенном диапазоне?',
                answers: ['randomNumber()', 'random()', 'Math.randomNumber()', 'Math.random()'],
                rightAnswer: 'Math.random()'
            },
            {
                id: 6,
                question: '6. Какой символ используется для комментирования однострочного комментария в JavaScript?',
                answers: ['//', '/* */', '<!-- -->', '--'],
                rightAnswer: '//'
            },
        ]
    },
    {
        id: 2,
        name: 'css',
        img: 'url(./img/test/css.jpg)',
        questions: [
            {
                id: 1,
                question: '1. Какое значение установлено по умолчанию для opacity?',
                answers: ['100', '1', '0', 'auto'],
                rightAnswer: '1'
            },
            {
                id: 2,
                question: '2. Какого псевдоэлемента не существует в CSS?',
                answers: ['::after', '::first-letter', '::last-letter', '::selection'],
                rightAnswer: '::last-letter'
            },
            {
                id: 3,
                question: '3. Как правильно объявить переменную в CSS?',
                answers: ['$main-color: black;', '--main-color: black;', '@main-color: black;', 'Только с помощью препроцессоров'],
                rightAnswer: '--main-color: black;'
            },
            {
                id: 4,
                question: '4. Какой псевдокласс сработает при установке курсора в текстовом поле (input)?',
                answers: [':hover', ':active', ':not(:active)', ':focus'],
                rightAnswer: ':focus'
            },
            {
                id: 5,
                question: '5. Как сделать так, чтобы каждое слово в тексте начиналось с прописной буквы?',
                answers: ['text-style: capitalize;', 'text-transform: capitalize;', 'text-transform: uppercase;', 'transform: capitalize;'],
                rightAnswer: 'text-transform: capitalize;'
            },
            {
                id: 6,
                question: '6. Какова ширина HTML-элемента div без содержания?',
                answers: ['100px', '0px', '100%', '100vh'],
                rightAnswer: '100%'
            },
        ]
    },
    {
        id: 3,
        name: 'html',
        img: 'url(./img/test/html.png)',
        questions: [
            {
                id: 1,
                question: '1. Какими тегами обозначается ссылка?',
                answers: ['<a></a>', '<a>', '<p></p>', '<href></href>'],
                rightAnswer: '<a></a>'
            },
            {
                id: 2,
                question: '2. Для чего нужен тег <br/>?',
                answers: ['горизонтальная черта', 'перенос строки', 'абзац', 'вертикальная черта'],
                rightAnswer: 'перенос строки'
            },
            {
                id: 3,
                question: '3. <a href="#family">Семья</a>?',
                answers: ['якорная', 'относительная', 'абсолютная'],
                rightAnswer: 'якорная'
            },
            {
                id: 4,
                question: '4. Какой тег НЕ является парным?',
                answers: ['<img>', '<table>', '<a>', '<title>'],
                rightAnswer: '<img>'
            },
            {
                id: 5,
                question: '5. Какой тэг содержит навигацию?',
                answers: ['<nav>', '<geo>', '<metanav>', '<a>'],
                rightAnswer: '<nav>'
            },
            {
                id: 6,
                question: '6. HTML – это',
                answers: ['Скриптовый язык', 'Библиотека гипертекста', 'Язык разметки'],
                rightAnswer: 'Язык разметки'
            },
        ]
    },
    {
        id: 4,
        name: 'php',
        img: 'url(./img/test/php.png)',
        questions: [
            {
                id: 1,
                question: '1. Какими разделителями окружены скрипты php скрипта?',
                answers: ['</> php </>', '<php> … </php>', '<? php … ?>'],
                rightAnswer: '<? php … ?>'
            },
            {
                id: 2,
                question: '2. С какого символа начинаются все переменные в php?',
                answers: ['<>', '$', '%', '!'],
                rightAnswer: '$'
            },
            {
                id: 3,
                question: '3. Перечислите основные типы данных в php:',
                answers: ['Boolean, float, logic, text, subject, NULL', 'String, boolean, text, massive, logic, NULL', 'Boolean, integer, float, string, array, object, resource, NULL'],
                rightAnswer: 'Boolean, integer, float, string, array, object, resource, NULL'
            },
            {
                id: 4,
                question: '4. В php используется … типизация данных.',
                answers: ['Коммутационная', 'Синтаксическая', 'Динамическая'],
                rightAnswer: 'Динамическая'
            },
            {
                id: 5,
                question: '5. Укажите неверно заданное имя:',
                answers: ['$my-Var', '$my_Var', '$myVar'],
                rightAnswer: '$my-Var'
            },
            {
                id: 6,
                question: '6. В php файлы cookie задаются следующим образом',
                answers: ['setcookie()', 'makecookie()', 'createcookie()'],
                rightAnswer: 'setcookie()'
            },
        ]
    },
    {
        id: 5,
        name: 'ts',
        img: 'url(./img/test/ts.jpg)',
        questions: [
            {
                id: 1,
                question: '1. Кто разработал TypeScript?',
                answers: ['Amazon', 'TypeScript', 'Microsoft', 'Oracle'],
                rightAnswer: 'Microsoft'
            },
            {
                id: 2,
                question: '2. Выберите правильный вид типизации в TypeScript:',
                answers: ['Duck', 'Gradual', 'Dynamic', 'Все вышеперечисленные'],
                rightAnswer: 'Все вышеперечисленные'
            },
            {
                id: 3,
                question: '3. Какой из следующих вариантов не является бэкпорт функцией TypeScript?',
                answers: ['Стрелочные функции', 'Классы', 'Методы', 'Модули'],
                rightAnswer: 'Стрелочные функции'
            },
            {
                id: 4,
                question: '4. Какие объектно-ориентированные термины поддерживаются Typescript?',
                answers: ['Модули', 'Классы', 'Интерфейсы', 'Все вышеперечисленные'],
                rightAnswer: 'Все вышеперечисленные'
            },
            {
                id: 5,
                question: '5. Выберите типы модификаторов доступа, поддерживаемые TypeScript:',
                answers: ['Защищенный', 'Частный', 'Общий', 'Все вышеперечисленные'],
                rightAnswer: 'Все вышеперечисленные'
            },
            {
                id: 6,
                question: '6. Можно ли использовать alert() в TypeScript?',
                answers: ['да', 'нет',],
                rightAnswer: 'да'
            },
        ]
    },
    {
        id: 6,
        name: 'c#',
        img: 'url(./img/test/c.png)',
        questions: [
            {
                id: 1,
                question: '1. Что такое Куча?',
                answers: ['Область динамической памяти', 'Именованная область памяти', 'Куча переменных'],
                rightAnswer: 'Область динамической памяти'
            },
            {
                id: 2,
                question: '2. Какие циклы существуют в языке C#?',
                answers: ['for, while', 'for, while, do while, foreach', 'for, while, do while'],
                rightAnswer: 'for, while, do while, foreach'
            },
            {
                id: 3,
                question: '3. Что обозначает ключевое слово var?',
                answers: ['Устраивает «войну» между программами', 'Обозначает что переменная имеет явный тип данных', 'Обозначает что переменная без явного типа данных'],
                rightAnswer: 'Обозначает что переменная без явного типа данных'
            },
            {
                id: 4,
                question: '4. Что такое константа?',
                answers: ['Глобальная переменная', 'Переменная которая может быть изменена в любое время', 'Переменная значение которой нельзя изменить'],
                rightAnswer: 'Переменная значение которой нельзя изменить'
            },
            {
                id: 5,
                question: '5. Какой тип переменной используется в коде: int a = 5?',
                answers: ['Знаковое 64-бит целое', 'Знаковое 8-бит целое', 'Знаковое 32-бит целое'],
                rightAnswer: 'Знаковое 32-бит целое'
            },
            {
                id: 6,
                question: '6. Для чего можно использовать язык C#?',
                answers: ['Для создания веб сайтов', 'Для создания программ под ПК', 'Оба варианта верны', 'Нет верного ответа'],
                rightAnswer: 'Оба варианта верны'
            },
        ]
    },
    {
        id: 7,
        name: 'python',
        img: 'url(./img/test/python.jpg)',
        questions: [
            {
                id: 1,
                question: '1. Для чего применяется метод nextset() объекта-курсора?',
                answers: ['для перехода к следующему набору записей результата запроса', 'для перехода к следующей записи результата запроса', 'для получения следующего набора записей результата запроса'],
                rightAnswer: 'для перехода к следующему набору записей результата запроса'
            },
            {
                id: 2,
                question: '2. В каком модуле нужно искать функции, помогающие тестировать программу?',
                answers: ['dictutils', 'profile', 'unittest'],
                rightAnswer: 'unittest'
            },
            {
                id: 3,
                question: '3. Какой модуль стандартной библиотеки Python позволяет работать с WWW на более низком уровне?',
                answers: ['httplib', 'urlparse', 'urllib2'],
                rightAnswer: 'httplib'
            },
            {
                id: 4,
                question: '4. Какое из приведенных ниже регулярных выражений некорректно?',
                answers: ['a+b++', '(?P(ac))', '(a+b+)+'],
                rightAnswer: 'a+b++'
            },
            {
                id: 5,
                question: '5. Какой метод позволяет узнать, имеет ли данное сообщение несколько частей?',
                answers: ['items()', 'get_main_type()', 'get_payload()'],
                rightAnswer: 'get_main_type()'
            },
            {
                id: 6,
                question: '6. Что включает в себя Zope?',
                answers: ['СУБД общего назначения', 'поддержку CGI-сценариев', 'собственный web-сервер'],
                rightAnswer: 'собственный web-сервер'
            },
        ]
    },
    {
        id: 8,
        name: 'java',
        img: 'url(./img/test/java.jpg)',
        questions: [
            {
                id: 1,
                question: '1. Какое утверждение относительно класса java.lang.Object верно?',
                answers: ['нельзя явно переопределять методы этого класса', 'у этого класса нет полей', 'нельзя явно наследовать этот класс'],
                rightAnswer: 'у этого класса нет полей'
            },
            {
                id: 2,
                question: '2. Сколько объектов порождается при инициализации массива new int[3][]?',
                answers: ['1', '2', '3'],
                rightAnswer: '1'
            },
            {
                id: 3,
                question: '3. Какое утверждение относительно класса String верно?',
                answers: ['является абстрактным', 'содержит только статические методы', 'обладает свойством неизменяемости'],
                rightAnswer: 'обладает свойством неизменяемости'
            },
            {
                id: 4,
                question: '4. Отметьте верное утверждение относительно языков Java и JavaScript?',
                answers: ['JavaScript является синонимом Java', 'их спецификации являются закрытыми', 'оба языка кроссплатформенны'],
                rightAnswer: 'оба языка кроссплатформенны'
            },
            {
                id: 5,
                question: '5. Какая кодировка используется классом OutputStreamWriter по умолчанию?',
                answers: ['UTF-8 независимо от системы, где запущена Java-машина', 'UTF-16 независимо от системы, где запущена Java-машина', 'используемая кодировка зависит от системы, где запущена Java-машина'],
                rightAnswer: 'используемая кодировка зависит от системы, где запущена Java-машина'
            },
            {
                id: 6,
                question: '6. Какой из перечисленных ниже классов имеет наибольшее сходство с классомVector?',
                answers: ['ArrayList', 'LinkedList', 'AbstractCollection'],
                rightAnswer: 'ArrayList'
            },
        ]
    },
];

export default tests;