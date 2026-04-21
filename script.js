// -------------------- ПЕРЕМЕННЫЕ --------------------
let isQuestionActive = false;
let score = 0;
let clicks = 0;
let currentAnswer = "";
let time = 0;
let timerInterval;
let time_score = 0;
let gameEnded = false;
let gameOverReason = ""; 

// -------------------- МАССИВ ВОПРОСОВ (ваш существующий) --------------------
// вопросы
const questions = [
    {
        q: "Что является основным отличием программирования от программной инженерии?",
        a: "b",
        options: [
            "Программирование всегда связано с математикой, а программная инженерия — с менеджментом",
            "Программирование — абстрактная деятельность в разных контекстах, а программная инженерия — дополнительные виды деятельности для промышленной разработки",
            "Программирование появилось после программной инженерии",
            "Программирование не требует документации, а программная инженерия — только документации"
        ]
    },
    {
        q: "Что из перечисленного является примером программирования НЕ в контексте программной инженерии?",
        a: "b",
        options: [
            "Разработка банковской системы в команде из 10 человек",
            "Написание кода для удовольствия дома",
            "Создание коммерческого продукта с жесткими сроками",
            "Разработка по требованиям заказчика с документацией"
        ]
    },
    {
        q: "Какая деятельность НЕ относится к «обрастанию» промышленного программирования согласно тексту?",
        a: "c",
        options: [
            "Разработка требований",
            "Тестирование",
            "Дизайн пользовательских иконок",
            "Проектный менеджмент"
        ]
    },
    {
        q: "Что предваряет разработку программного кода в промышленном программировании?",
        a: "b",
        options: [
            "Написание пользовательской документации",
            "Анализ и проектирование",
            "Продажа продукта заказчику",
            "Конфигурационное управление"
        ]
    },
    {
        q: "Что создается на этапе анализа?",
        a: "b",
        options: [
            "Исполняемый файл",
            "Функциональная модель будущей системы без учета реализации",
            "Макет интерфейса в Photoshop",
            "План тестирования"
        ]
    },
    {
        q: "Что создается на этапе проектирования?",
        a: "b",
        options: [
            "Код на языке программирования",
            "Предварительный макет, эскиз, план системы на бумаге",
            "Требования заказчика",
            "Отчет об ошибках"
        ]
    },
    {
        q: "Как называется общая модель процесса разработки, описанная в тексте?",
        a: "b",
        options: [
            "Каскадная модель",
            "Итеративно-инкрементальная модель",
            "Спиральная модель",
            "V-образная модель"
        ]
    },
    {
        q: "Кто и когда предложил перевод «software engineering» как «программная инженерия»?",
        a: "c",
        options: [
            "А.П. Ершов в 70-х гг.",
            "Харальд Милс в 1945 г.",
            "И.В. Поттосин в конце 90-х",
            "Фредерик Брукс в 1968 г."
        ]
    },
    {
        q: "Как переводил «software engineering» А.П. Ершов?",
        a: "b",
        options: [
            "Программная инженерия",
            "Технология программирования",
            "Системная инженерия",
            "Бизнес-программирование"
        ]
    },
    {
        q: "Какое событие считается рождением программной инженерии?",
        a: "b",
        options: [
            "Отчет фон Неймана 1945 г.",
            "Конференция NATO в Гармише (1968 г.)",
            "Выход первой версии Windows",
            "Публикация статьи «Серебряной пули нет»"
        ]
    },
    {
        q: "В каком году была конференция, положившая начало программной инженерии?",
        a: "b",
        options: [
            "1945",
            "1968",
            "1970",
            "1990"
        ]
    },
    {
        q: "Как определяется информатика (computer science) по отношению к программной инженерии?",
        a: "b",
        options: [
            "Это практика написания кода в команде",
            "Это свод теоретических наук, основанных на математике",
            "Это проектирование аппаратных средств",
            "Это бизнес-реинжиниринг"
        ]
    },
    {
        q: "Что из перечисленного относится к информатике?",
        a: "b",
        options: [
            "Проектный менеджмент",
            "Математическая логика и теория грамматик",
            "Разработка требований",
            "Управление конфигурацией"
        ]
    },
    {
        q: "Что объединяет системотехника?",
        a: "b",
        options: [
            "Только программное обеспечение",
            "Различные инженерные дисциплины по разработке искусственных систем",
            "Бизнес-процессы предприятий",
            "Методы тестирования"
        ]
    },
    {
        q: "Что часто предваряет разработку информационных систем на предприятии?",
        a: "a",
        options: [
            "Бизнес-реинжиниринг",
            "Написание кода",
            "Установка серверов",
            "Обучение пользователей"
        ]
    },
    {
        q: "Какое определение ПО дал Харальд Милс?",
        a: "b",
        options: [
            "Набор исполняемых файлов",
            "Множество развивающихся во времени логических предписаний для управления распределенной многопроцессорной системой",
            "Код плюс пользователи",
            "Математическая модель"
        ]
    },
    {
        q: "Какую особенность ПО назвал Брукс «незримостью»?",
        a: "b",
        options: [
            "Легкость изменения",
            "Невозможность увидеть, виртуальность",
            "Зависимость от размеров",
            "Согласованность с интерфейсами"
        ]
    },
    {
        q: "Какая особенность ПО по Бруксу означает, что его легко изменить и требования постоянно меняются?",
        a: "c",
        options: [
            "Сложность",
            "Согласованность",
            "Изменяемость",
            "Нематериальность"
        ]
    },
    {
        q: "Какая особенность ПО по Бруксу связана с плохо формализуемыми человеческими соглашениями?",
        a: "b",
        options: [
            "Сложность",
            "Согласованность",
            "Изменяемость",
            "Незримость"
        ]
    },
    {
        q: "Что такое IDEF0?",
        a: "b",
        options: [
            "Язык программирования",
            "Стандарт функционального моделирования",
            "Система контроля версий",
            "Методология управления проектами"
        ]
    },
    {
        q: "Для чего используется IDEF0?",
        a: "b",
        options: [
            "Для написания кода",
            "Для анализа требований и функционального моделирования",
            "Для тестирования программ",
            "Для управления версиями"
        ]
    },
    {
        q: "Что такое IDEF?",
        a: "b",
        options: [
            "Язык программирования",
            "Семейство методологий функционального и информационного моделирования",
            "Система управления версиями",
            "Конференция по ПО"
        ]
    },
    {
        q: "Какова главная цель программного инженера?",
        a: "b",
        options: [
            "Писать красивый код",
            "Понять заказчика, выполнить в срок, обеспечить качество за оплату",
            "Изучить все языки программирования",
            "Публиковать научные статьи"
        ]
    },
    {
        q: "Что из перечисленного — причина неудач при разработке ПО?",
        a: "b",
        options: [
            "Слишком быстрый процессор",
            "Отсутствие анализа и проектирования",
            "Избыточная документация",
            "Слишком много тестировщиков"
        ]
    },
    {
        q: "Какая причина неудач связана с заказчиком?",
        a: "b",
        options: [
            "Медленная работа процессора",
            "Игнорирование требований заказчика",
            "Слишком красивый код",
            "Избыток времени на проект"
        ]
    },
    {
        q: "Что НЕ является методом программного инженера?",
        a: "c",
        options: [
            "Разработка требований",
            "Планирование",
            "Дизайн логотипа компании",
            "Тестирование"
        ]
    },
    {
        q: "Что входит в методы программной инженерии?",
        a: "b",
        options: [
            "Только написание кода",
            "Разбиение на компоненты и проработка интерфейсов",
            "Только продажи ПО",
            "Только дизайн иконок"
        ]
    },
    {
        q: "Что из перечисленного — профессиональная обязанность программного инженера?",
        a: "b",
        options: [
            "Только написание кода",
            "Анализ и проектирование",
            "Продажа ПО заказчику",
            "Бухгалтерский учет"
        ]
    },
    {
        q: "Что входит в обязанности программного инженера по обеспечению будущего использования системы?",
        a: "b",
        options: [
            "Продажа лицензий",
            "Удобство сопровождения, повторного использования и интеграции",
            "Написание маркетинговых текстов",
            "Подбор офиса для команды"
        ]
    },
    {
        q: "Как программный инженер обеспечивает единую архитектуру?",
        a: "b",
        options: [
            "Покупает дорогое ПО",
            "Создает правила оформления кода и семантические следы",
            "Увольняет разработчиков",
            "Использует только один язык программирования"
        ]
    },
    {
        q: "Что такое конфигурационное управление?",
        a: "b",
        options: [
            "Управление внешним видом кнопок",
            "Управление версиями и изменениями в процессе разработки",
            "Написание требований",
            "Тестирование пользователями"
        ]
    },
    {
        q: "Кто написал «Серебряной пули нет»?",
        a: "c",
        options: [
            "Фон Нейман",
            "Харальд Милс",
            "Фредерик Брукс",
            "И.В. Поттосин"
        ]
    },
    {
        q: "В каком году вышел отчет фон Неймана «First Draft of a Report on the EDVAC»?",
        a: "a",
        options: [
            "1945",
            "1968",
            "1970",
            "1985"
        ]
    },
    {
        q: "Что из перечисленного — best practice / методология?",
        a: "b",
        options: [
            "Photoshop",
            "Scrum",
            "Windows",
            "Intel Core"
        ]
    },
    {
        q: "Что из перечисленного — методология управления разработкой?",
        a: "b",
        options: [
            "IDEF0",
            "CMMI",
            "EDVAC",
            "MS Word"
        ]
    },
    {
        q: "Что означает «распределенность» вычислительной среды по тексту?",
        a: "b",
        options: [
            "Один компьютер",
            "Пользователи удалены друг от друга в физическом пространстве",
            "Один процессор",
            "Отсутствие сети"
        ]
    },
    {
        q: "Что означает «многопроцессорность» вычислительной среды по тексту?",
        a: "b",
        options: [
            "Один пользователь",
            "Наличие сервера базы данных и сервера приложений",
            "Одно ядро процессора",
            "Отсутствие серверов"
        ]
    },
    {
        q: "Что из перечисленного НЕ является обязанностью программного инженера?",
        a: "c",
        options: [
            "Документирование системы",
            "Организация итеративно-инкрементальной разработки",
            "Продажа готового ПО заказчику",
            "Разбиение на компоненты"
        ]
    },
    {
        q: "Какая модель процесса позволяет менеджерам и заказчику оценивать функциональность порциями?",
        a: "b",
        options: [
            "Каскадная",
            "Итеративно-инкрементальная",
            "«Большой взрыв»",
            "Адиабатическая"
        ]
    },
    {
        q: "Что такое программная инженерия как область знания?",
        a: "b",
        options: [
            "Только написание кода",
            "Обобщение опыта в виде методов, практик, стандартов и методологий",
            "Только тестирование",
            "Только продажи ПО"
        ]
    }
];
let activeQuestions = [...questions];

// -------------------- DOM ЭЛЕМЕНТЫ --------------------
const boxDiv = document.querySelector(".box");
const boxImg = document.getElementById("box-img");
const questionBlock = document.getElementById("question-block");
const questionEl = document.getElementById("question");
const optionsDiv = document.getElementById("options");
const timerEl = document.getElementById("timer");
const rerollBtn = document.getElementById("reroll-btn");
const scoreSpans = document.querySelectorAll("#score");
const goblinContainer = document.getElementById("goblins-container");

// -------------------- МУЗЫКА --------------------
const bgMusic = document.getElementById("bg-music");
const musicToggle = document.getElementById("toggle-music");
let musicPlaying = false;

musicToggle.addEventListener("click", () => {
    if (musicPlaying) {
        bgMusic.pause();
        musicToggle.textContent = "🔇 Вкл. музыку";
    } else {
        bgMusic.play().catch(e => console.log("Автовоспроизведение заблокировано"));
        musicToggle.textContent = "🔊 Выкл. музыку";
    }
    musicPlaying = !musicPlaying;
});

window.addEventListener("load", () => {
    bgMusic.play().then(() => {
        musicPlaying = true;
        musicToggle.textContent = "🔊 Выкл. музыку";
    }).catch(() => {
        musicPlaying = false;
        musicToggle.textContent = "🔇 Вкл. музыку";
    });
});

// -------------------- ГОБЛИНЫ --------------------
let goblins = [];
let goblinSpawnInterval;
let animationFrame;

function getBoxCenter() {
    const rect = boxImg.getBoundingClientRect();
    return { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 };
}

function spawnGoblin() {
    if (gameEnded) return;
    const side = Math.floor(Math.random() * 4);
    let x, y;
    const pad = 20;
    switch (side) {
        case 0: x = -pad; y = Math.random() * window.innerHeight; break;
        case 1: x = window.innerWidth + pad; y = Math.random() * window.innerHeight; break;
        case 2: x = Math.random() * window.innerWidth; y = -pad; break;
        case 3: x = Math.random() * window.innerWidth; y = window.innerHeight + pad; break;
    }
    const goblin = document.createElement("div");
    goblin.className = "goblin";
    goblin.textContent = "🧟"; 
    goblin.style.left = x + "px";
    goblin.style.top = y + "px";
    goblin.addEventListener("click", (e) => {
        e.stopPropagation();
        killGoblin(goblin);
    });
    goblinContainer.appendChild(goblin);
    const speed = 1.5;
    goblins.push({ element: goblin, x, y, speed });
}

function killGoblin(goblinEl) {
    const idx = goblins.findIndex(g => g.element === goblinEl);
    if (idx !== -1) {
        goblinEl.remove();
        goblins.splice(idx, 1);
    }
}

function moveGoblins() {
    if (gameEnded) return;
    const boxCenter = getBoxCenter();
    const boxRect = boxImg.getBoundingClientRect();
    for (let i = goblins.length - 1; i >= 0; i--) {
        const g = goblins[i];
        const dx = boxCenter.x - g.x;
        const dy = boxCenter.y - g.y;
        const dist = Math.sqrt(dx*dx + dy*dy);
        if (dist > 1) {
            g.x += (dx / dist) * g.speed;
            g.y += (dy / dist) * g.speed;
            g.element.style.left = g.x + "px";
            g.element.style.top = g.y + "px";
        }
        const goblinRect = g.element.getBoundingClientRect();
        if (!(goblinRect.right < boxRect.left || goblinRect.left > boxRect.right ||
            goblinRect.bottom < boxRect.top || goblinRect.top > boxRect.bottom)) {
            gameEnded = true;
            gameOverReason = "goblin";
            endGame();
            return;
        }
    }
    animationFrame = requestAnimationFrame(moveGoblins);
}

function startGoblins() {
    goblinSpawnInterval = setInterval(spawnGoblin, 5000);
    animationFrame = requestAnimationFrame(moveGoblins);
}

function stopGoblins() {
    clearInterval(goblinSpawnInterval);
    if (animationFrame) cancelAnimationFrame(animationFrame);
    goblins.forEach(g => g.element.remove());
    goblins = [];
}

// -------------------- ОБЩИЕ ФУНКЦИИ --------------------
function updateScore() {
    scoreSpans.forEach(el => el.textContent = score);
}

function updateUI() {
    updateScore();
    if (rerollBtn) {
        rerollBtn.classList.toggle("hidden", !isQuestionActive);
    }
}

function clickBox() {
    if (isQuestionActive || gameEnded) return;
    clicks++;
    boxDiv.classList.remove("pulse");
    void boxDiv.offsetWidth;
    boxDiv.classList.add("pulse");
    if (clicks % 3 === 0) showQuestion();
}

function getRandomQuestion() {
    if (activeQuestions.length === 0) return null;
    const idx = Math.floor(Math.random() * activeQuestions.length);
    const q = activeQuestions[idx];
    activeQuestions.splice(idx, 1);
    return q;
}

function showQuestion() {
    if (gameEnded) return;
    isQuestionActive = true;
    boxDiv.classList.add("disabled");
    const q = getRandomQuestion();
    if (!q) {
    gameEnded = true;
    gameOverReason = "questions";
    endGame();
    return;
    }
    currentAnswer = q.a;
    questionEl.textContent = q.q;
    questionBlock.classList.remove("hidden");
    renderOptions(q);
    startTimer();
    updateUI();
}

function renderOptions(q) {
    optionsDiv.innerHTML = "";
    q.options.forEach((opt, i) => {
        const btn = document.createElement("button");
        btn.textContent = opt;
        btn.onclick = () => checkAnswer(i, q.a);
        optionsDiv.appendChild(btn);
    });
}

function checkAnswer(selectedIdx, correctLetter) {
    const letters = ["a", "b", "c", "d"];
    if (letters[selectedIdx] === correctLetter) {
        score+=2.5;
        alert("Правильно!");
    } else {
        alert("Неправильно!");
    }
    clearInterval(timerInterval);
    questionBlock.classList.add("hidden");
    isQuestionActive = false;
    boxDiv.classList.remove("disabled");
    updateUI();
}

function startTimer() {
    time = 60 + time_score;
    timerEl.textContent = "Время: " + time;
    timerInterval = setInterval(() => {
        time--;
        timerEl.textContent = "Время: " + time;
        if (time <= 0) {
            clearInterval(timerInterval);
            alert("Время вышло!");
            questionBlock.classList.add("hidden");
            isQuestionActive = false;
            boxDiv.classList.remove("disabled");
            updateUI();
        }
    }, 1000);
}

function rerollQuestion() {
    if (gameEnded || !isQuestionActive) return;
    if (score >= 1.5) {
        score -= 1.5;
        const q = getRandomQuestion();
        if (!q) {
            endGame();
            return;
        }
        currentAnswer = q.a;
        questionEl.textContent = q.q;
        renderOptions(q);
        clearInterval(timerInterval);
        startTimer();
        updateUI();
    } else {
        alert("Недостаточно кристаллов");
    }
}

function buyTimeInGame() {
    if (gameEnded || !isQuestionActive) return;
    if (score >= 2) {
        score -= 2;
        time_score += 5;
        updateScore();
        alert("+5 секунд куплено! (на следующий вопрос)");
    } else {
        alert("Недостаточно кристаллов");
    }
}

function endGame() {
    gameEnded = true;
    clearInterval(timerInterval);
    stopGoblins();
    questionBlock.classList.add("hidden");
    boxDiv.style.display = "none";
    let grade = score < 50 ? 2 : score < 60 ? 3 : score < 90 ? 4 : 5;
    document.querySelector(".game-container").innerHTML = `
        <h1>Тест завершён</h1>
        <p>Баллы: ${score}</p>
        <p>Оценка: ${grade}</p>
        ${gameOverReason === "goblin" ? "<p>Зомби добрался до коробки!</p>" : ""}
    `;
    bgMusic.pause();
    musicPlaying = false;
    musicToggle.textContent = "🔇 Вкл. музыку";
}

// -------------------- ИНИЦИАЛИЗАЦИЯ --------------------
window.addEventListener("load", () => {
    if (window.location.pathname.includes("game.html")) {
        startGoblins();
        updateScore();
    }
});
