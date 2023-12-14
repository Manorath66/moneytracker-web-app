javascript
let balance = 0;
const balanceElement = document.getElementById('balance');
const transactionList = document.getElementById('transactionList');
const amountInput = document.getElementById('amount');

function updateBalance() {
    balanceElement.textContent = balance.toFixed(2);
}

function addTransaction() {
    const amount = parseFloat(amountInput.value);
    if (isNaN(amount)) {
        alert('Please enter a valid amount.');
        return;
    }

    balance += amount;
    updateBalance();

    const listItem = document.createElement('li');
    listItem.textContent = amount > 0 ? `+ $${amount.toFixed(2)}` : `- $${Math.abs(amount).toFixed(2)}`;
    listItem.className = amount > 0 ? 'green' : 'red';

    transactionList.appendChild(listItem);
    amountInput.value = '';
}

