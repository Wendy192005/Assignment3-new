const $ = (selector) => document.querySelector(selector);

function processEntry(){
    const changeAmount = parseInt($('#changeAmount').value);

    // Check if the amount entered is valid
    if ((changeAmount <= 0 ) || (changeAmount >= 100)){
        alert('The amount must be between 1 and 99');
        return;
    } else {
        makeChange(changeAmount);
    }
}

function makeChange(changeAmount){
    // Calculate the number of each coin type
    const quarterAmount = Math.floor(changeAmount / 25);
    changeAmount -= quarterAmount * 25;

    const dimeAmount = Math.floor(changeAmount / 10);
    changeAmount -= dimeAmount * 10;

    const nickelAmount = Math.floor(changeAmount / 5);
    changeAmount -= nickelAmount * 5;

    const penniesAmount = changeAmount; // Remaining change is in pennies

    // Display the results in the respective fields
    $('#quarters').value = quarterAmount;
    $('#dimes').value = dimeAmount;
    $('#nickels').value = nickelAmount;
    $('#pennies').value = penniesAmount;
}

// Attach the processEntry function to the "Calculate" button
document.addEventListener('DOMContentLoaded', function() {
    $('#calculateButton').addEventListener('click', processEntry);
});
