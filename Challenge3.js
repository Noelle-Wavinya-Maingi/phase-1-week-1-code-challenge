//This function is to calculate the net income of a user after being prompted to input their Basic salary and their Benefits.

function netSalaryCalculator() {
  let basicSalary = parseFloat(prompt("Enter your basic salary:"));

  let benefits = parseFloat(prompt("Enter your benefits:"));

  let grossIncome = basicSalary + benefits;

  let nhifContribution = 0;

  if (grossIncome <= 5999) {
    nhifContribution = 150;
  } else if (grossIncome >= 6000 && grossIncome <= 7999) {
    nhifContribution = 300;
  } else if (grossIncome >= 8000 && grossIncome <= 11999) {
    nhifContribution = 400;
  } else if (grossIncome >= 12000 && grossIncome <= 14999) {
    nhifContribution = 500;
  } else if (grossIncome >= 15000 && grossIncome <= 19999) {
    nhifContribution = 600;
  } else if (grossIncome >= 20000 && grossIncome <= 24999) {
    nhifContribution = 750;
  } else if (grossIncome >= 25000 && grossIncome <= 29999) {
    nhifContribution = 850;
  } else if (grossIncome >= 30000 && grossIncome <= 34999) {
    nhifContribution = 900;
  } else if (grossIncome >= 35000 && grossIncome <= 39999) {
    nhifContribution = 950;
  } else if (grossIncome >= 40000 && grossIncome <= 44999) {
    nhifContribution = 1000;
  } else if (grossIncome >= 45000 && grossIncome <= 49999) {
    nhifContribution = 1100;
  } else if (grossIncome >= 50000 && grossIncome <= 59999) {
    nhifContribution = 1200;
  } else if (grossIncome >= 60000 && grossIncome <= 69999) {
    nhifContribution = 1300;
  } else if (grossIncome >= 70000 && grossIncome <= 79999) {
    nhifContribution = 1400;
  } else if (grossIncome >= 80000 && grossIncome <= 89999) {
    nhifContribution = 1500;
  } else if (grossIncome >= 90000 && grossIncome <= 99999) {
    nhifContribution = 1600;
  } else {
    nhifContribution = 1700;
  }

  let nssfContribution = grossIncome * 0.06;

  let totalDeductable = nhifContribution + nhifContribution;

  let taxableIncome = grossIncome - totalDeductable;

  let tax = 0;

  if (taxableIncome <= 24000) {
    tax = taxableIncome * 0.1;
  } else if (taxableIncome >= 32333 && taxableIncome <= 24001) {
    tax = taxableIncome * 0.25;
  } else {
    tax = taxableIncome * 0.3;
  }

  let netSalary = grossIncome - totalDeductable - tax;

  alert(`Your gross income is Ksh ${grossIncome}.`);

  alert(`Your NHIF contribution is Ksh ${nhifContribution}.`);

  alert(`Your NSSF contribution is Ksh ${nssfContribution}.`);

  alert(`Tax deducted is Ksh ${tax}.`);

  alert(`Your net salary is Ksh ${netSalary}.`);
}

netSalaryCalculator();
