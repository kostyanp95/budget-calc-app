
let 
    //Btns
    btnStartCalc = document.getElementById('start'),
    btnApproveOne = document.getElementsByTagName('button')[0],
    btnApproveTwo = document.getElementsByTagName('button')[1],
    btnCalc = document.getElementsByTagName('button')[2],

    //Labels
    budgetIncome = document.getElementsByClassName('budget-value')[0],
    dayIncome = document.getElementsByClassName('daybudget-value')[0],
    levelIncome = document.getElementsByClassName('level-value')[0],
    requiredExpenses = document.getElementsByClassName('expenses-value')[0],
    optionalExp = document.getElementsByClassName('optionalexpenses-value')[0],
    addIncome = document.getElementsByClassName('income-value')[0],
    monthSavings = document.getElementsByClassName('monthsavings-value')[0],
    yearSavings = document.getElementsByClassName('yearsavings-value')[0],

    //Inputs 
    inputExpenses = document.getElementsByClassName('expenses-item'), 
    inputOptExp = document.querySelectorAll('.optionalexpenses-item'), 
    possibleIncome = document.querySelector('#income'),
    sumSavings = document.querySelector('#sum'),
    sumSavingsPerc = document.querySelector('#percent'),
    year = document.querySelector('.year-value'),
    mounth = document.querySelector('.month-value'),
    day = document.querySelector('.day-value'),

    //CheckBox
    checkBox = document.querySelector('input[type="checkbox"]');

let money, time;

btnStartCalc.addEventListener('click', function () { //Btn НАЧАТЬ РАСЧЕТ
    time = prompt('Введите дату в формате YYYY-MM-DD', '');
    money = +prompt('Ваш бюджет на месяц?', '');

    while (isNaN(money) || money == '' || money == null) { // Check that income is a number
        money = +prompt('Ваш бюджет на месяц?', '');
    }

    appData.budget = money; // Write data to global object appData
    appData.timeData = time;
    budgetIncome.textContent = money.toFixed(); // Write data to label
    date = new Date(Date.parse(time));
    year.value = date.getFullYear();
    mounth.value = date.getMonth() + 1;
    day.value = date.getDate();
});

btnApproveOne.addEventListener('click', function () {
    let sum = 0;

    for (let i = 0; i < inputExpenses.length; i++) {
        let a = inputExpenses[i].value,
            b = inputExpenses[++i].value;

        if ((typeof (a)) === 'string' &&
            (typeof (a)) != null &&
            (typeof (b)) != null &&
            a != '' && b != '' &&
            a.length < 50) {
            console.log('done');
            appData.expenses[a] = b;
            sum += +b;
        } else {
            i = i - 1;
        }
    }
    requiredExpenses.textContent = sum;
});

btnApproveTwo.addEventListener('click', function() {
    for (let i = 0; i < inputOptExp.length; i++) { // Each inputs
        let opt = inputOptExp[i].value;
        appData.optionalExpenses[i] = opt; // Write data to global object appData
        optionalExp.textContent += appData.optionalExpenses[i] + ' '; // Write data to label
    }
});

btnCalc.addEventListener('click', function() {

    if (appData.budget != undefined) {
        appData.moneyPerDay = +(appData.budget / 30).toFixed();
        dayIncome.textContent = appData.moneyPerDay;
        
        if (appData.moneyPerDay < 100) {
            levelIncome.textContent = 'Мин уровень достатка';
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            levelIncome.textContent = 'Средний уровень';
        } else if (appData.moneyPerDay > 2000) {
            levelIncome.textContent = 'Нормальный уровень';
        } else {
            levelIncome.textContent = 'Произошла ошибка';
        }
    } else {
        dayIncome.textContent = 'Ошибка: Доход не указан, нажмите «Начать рассчет»';
    }
});

possibleIncome.addEventListener('input', function() {
    let items = possibleIncome.value;
    appData.income = items.split(', ');
    addIncome.textContent = appData.income;
});

checkBox.addEventListener('click', function() {
    if (appData.saving == true) {
        appData.saving = false;
    } else {
        appData.saving = true;
    }
});

sumSavings.addEventListener('input', function() {
    if (appData.saving == true) {
        let sum = +sumSavings.value,
            percent = +sumSavingsPerc.value;

        appData.monthIncome = sum / 100 / 12 * percent;
        appData.yearIncome = sum / 100 * percent;

        monthSavings.textContent = appData.monthIncome.toFixed(1);
        yearSavings.textContent = appData.yearIncome.toFixed(1);
    }
});

sumSavingsPerc.addEventListener('input', function() {
    if (appData.saving == true) {
        let sum = +sumSavings.value,
            percent = +sumSavingsPerc.value;

        appData.monthIncome = sum / 100 / 12 * percent;
        appData.yearIncome = sum / 100 * percent;

        monthSavings.textContent = appData.monthIncome.toFixed(1);
        yearSavings.textContent = appData.yearIncome.toFixed(1);
    }
});

// Global Data Object
let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    saving: false
}