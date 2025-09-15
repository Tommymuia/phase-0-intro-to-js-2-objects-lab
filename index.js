// Write your solution in this file!
// helpers.js

// 1. Create a global employee object
const employee = {
  name: 'Sam'
};

// 2. Non-destructive update: return a new object
function updateEmployeeWithKeyAndValue(employee, key, value) {
  // Clone the employee and add the new key/value
  return { ...employee, [key]: value };
}

// 3. Destructive update: modify the original object
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
}

// 4. Non-destructive delete: return a clone without the key
function deleteFromEmployeeByKey(employee, key) {
  const newEmployee = { ...employee };
  delete newEmployee[key];
  return newEmployee;
}

// 5. Destructive delete: modify the original employee
function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;
}

