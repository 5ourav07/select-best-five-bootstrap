// Conversation input value to float function
function inputValueConversation(fieldID) {
    const getFieldID = document.getElementById(fieldID);
    const getFieldString = getFieldID.value;
    const fieldValue = parseFloat(getFieldString);

    if (isNaN(fieldValue) === true) {
        getFieldID.value = '';
        alert('Invalid Number');
        return;
    }
    else {
        return fieldValue;
    }
}

// set value to expanse field function
function setExpenseField(fieldID, expense) {
    const playerExpensesField = document.getElementById(fieldID);
    playerExpensesField.innerText = expense;
}

// Player Expenses Calculation
function playerExpense() {
    // players list
    const playerList = document.getElementById('player-list');
    const list = playerList.querySelectorAll("li");
    const listLength = list.length;

    if (listLength < 1) {
        alert("No Player Selected!!");
        return;
    }

    const perPlayerCost = inputValueConversation('per-player');

    const playerCost = perPlayerCost * listLength;
    setExpenseField('player-expense', playerCost);
    return playerCost;
}

// Total Player Expenses Calculation
function TotalPlayerExpense() {
    const previousPlayerExpense = playerExpense();
    const managerExpense = inputValueConversation('manager-cost');
    const coachExpense = inputValueConversation('coach-cost');

    const totalExpense = previousPlayerExpense + managerExpense + coachExpense;

    setExpenseField('total-expense', totalExpense);
    return totalExpense;
}

document.getElementById('btn-calculate').addEventListener('click', function () {
    playerExpense();
})

document.getElementById('btn-totalCalculate').addEventListener('click', function () {
    TotalPlayerExpense();
})