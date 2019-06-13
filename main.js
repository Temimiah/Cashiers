//help the cashier return the right of change
window.alert('Help the cashier calculate the right change for this buyer')
//Instead of the original prompt, I have used the window alert to let viewer
//know what is expected of them.

var total = prompt("Total Due:");
total = parseFloat(total).toFixed(2);

//Always ensure value received is changed to number using parseFloat and
//also to 2 decimal places using .toFixed(2)

//Programme input:
//Amount due
//Amount paid by the customer
var amountPaid = prompt("Amount Paid:");
amountPaid = parseFloat(amountPaid).toFixed(2);

//Assuming amount paid is more than the total due to be paid
//Programme output:
//Print change amount
//Print change breakdown: notes and coins
var changeDue = parseFloat(amountPaid - total).toFixed(2);

window.alert(`Details of your transaction: \nBalance Due £${total}
\Amount Paid: £${amountPaid}\nThe Change is £${changeDue}`);
//I added this line to inform customer of their change
//Added items on new line using \n to make page tidy
//UK Example:
//Banknotes:
//£50 - £20 - £10 - £5
//Coins:
//£2 - £1 - 50p - 20p - 10p - 5p - 2p - 1p