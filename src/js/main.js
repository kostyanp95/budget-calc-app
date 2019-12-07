    //Btns
var btnStartCalc = document.getElementById('start'),
    btnApproveOne = document.getElementsByTagName('button')[0],
    btnApproveTwo = document.getElementsByTagName('button')[1],
    btnCalc = document.getElementsByTagName('button')[2],
    
    //Labels
    budgetIncome = document.getElementsByClassName('budget-value')[0],
    dayIncome = document.getElementsByClassName('daybudget-value')[0],
    levelIncome = document.getElementsByClassName('level-value')[0],
    expenses = document.getElementsByClassName('expenses-value')[0],
    optionalExp = document.getElementsByClassName('optionalexpenses-value')[0],
    addIncome = document.getElementsByClassName('income-value')[0],
    monthSavings = document.getElementsByClassName('monthsavings-value')[0],
    yearSavings = document.getElementsByClassName('yearsavings-value')[0], 

    //Inputs 
    inputExpenses = document.getElementsByClassName('expenses-item')[0], 
    inputOptExp = document.querySelectorAll('.optionalexpenses-item'), // 3 items
    possibleIncome = document.querySelector('#income'),
    sumSavings = document.querySelector('#sum'),
    sumSavingsPerc = document.querySelector('#percent'),
    year = document.querySelector('.year-value'),
    mounth = document.querySelector('.month-value'),
    day = document.querySelector('.day-value'),

    //CheckBox
    checkBox = document.querySelector('input[type="checkbox"]');
    