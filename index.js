// 1. Declare customerName in global scope
var customerName = 'bob';

// 2. Function to uppercase the global customerName
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// 3. Declare bestCustomer in global scope from inside a function
function setBestCustomer() {
  bestCustomer = 'not bob'; // implicitly global because we don't use var/let/const
}

// 4. Overwrite the global bestCustomer variable
function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

// 5. Declare a constant in global scope
const leastFavoriteCustomer = 'Karen';

// 6. Attempt to change the constant (will throw an error)
function changeLeastFavoriteCustomer() {
  // This line will cause an error: Assignment to constant variable
  leastFavoriteCustomer = 'Nancy';
}
