const myForm = document.getElementById('form');
const exAmoInput = document.getElementById('exAmo');
const choDesInput = document.getElementById('choDes');
const choCatInput = document.getElementById('choCat');

myForm.addEventListener('submit', getDetails)
function getDetails(e) {
    e.preventDefault();
    var obj = {
        expenseAmount: exAmoInput.value,
        chooseDescription: choDesInput.value,
        chooseCategory: choCatInput.value
    }

    localStorage.setItem(obj.expenseAmount, JSON.stringify(obj));
    addUserOnScreen(obj);
}

function addUserOnScreen(user) {
    if (localStorage.getItem(user.expenseAmount) !== null) {
        removeUserFromScreen(user.expenseAmount);
    }
    let parentNode = document.getElementById('userList');
    let childHTML = `<li id=${user.expenseAmount}> ${user.expenseAmount} - ${user.chooseDescription} - ${user.chooseCategory} 
    <button onclick= deleteUser('${user.expenseAmount}')> Delete Expense </button>
    <button onclick= editUser('${user.expenseAmount}','${user.chooseDescription}','${user.chooseCategory}')> Edit Expense </button>
    </li>`;
    parentNode.innerHTML += childHTML;
}

function deleteUser(expenseA) {
    localStorage.removeItem(expenseA);
    removeUserFromScreen(expenseA);
}

function removeUserFromScreen(expenseA) {
    let parentNode = document.getElementById('userList');
    childNodeToBedeleted = document.getElementById(expenseA);
    if (childNodeToBedeleted) {
        parentNode.removeChild(childNodeToBedeleted);
    }
}

function editUser(expenseA, chooseD, chooseC) {
    document.getElementById('exAmo') = expenseA;
    document.getElementById('choDes') = chooseD;
    document.getElementById('choCat') = chooseC;
    deleteUser(expenseA);
}

document.addEventListener('DOMContentLoaded', () => {

    var arr = Object.keys(localStorage);
    for (var i = 0; i < arr.length; i++) {
        var userdetails = JSON.parse(localStorage.getItem(arr[i]));
        addUserOnScreen(userdetails);
    }
});