// Exercise #1: For Each Function

const employeeSalaries = [20005, 40000, 32000, 14500, 34400];
const addOn = 5000;

function addSalary (employeeSalaries, addOn){
    const newAdd = [];
    for (let i=0; i<employeeSalaries.length; i++){
        newAdd.push(employeeSalaries[i] + addOn);
    };
    return newAdd;
};

let newSalary = addSalary(employeeSalaries, addOn);
console.log(newSalary);
const employeeSalaries = [20005, 40000, 32000, 14500, 344000];
const newEmployeeSalaries = [];

// Using `forEach` function here

console.log(newEmployeeSalaries); // [25005, 45000, 37000, 19500, 349000]
