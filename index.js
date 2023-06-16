function gradeGenerator() {
  let marks = prompt("Kindly input your marks");

  switch (true) {
    case marks > 100 || marks < 0:
      alert("Invalid Grade! Kindly Enter a valid grade");
      break;
    default:
      switch (true) {
        case marks > 79:
          alert("Your grade is A");
          break;
        case marks >= 60 && marks <= 79:
          alert("Your grade is B");
          break;
        case marks >= 49 && marks <= 59:
          alert("Your grade is C");
          break;
        case marks >= 40 && marks <= 48:
          alert("Your grade is D");
          break;
        default:
          alert("Your grade is E");
          break;
      }
      break;
  }
}

gradeGenerator();

function speedDetector() {
  let speed = prompt("Input the speed of your car:");
  let speedLimit = 70;
  let totalDemerits = 0;

  if (speed > 70) {
    let overSpeeding = speed - speedLimit;
    let demerits = Math.floor(overSpeeding / 5);

    totalDemerits += demerits;
    alert(`Points: ${totalDemerits} `);

    if (totalDemerits >= 12) {
      alert("License suspended!");
    }
  } else {
    alert("Ok");
  }
}

speedDetector();

function netSalaryCalculator() {
  let basicSalary = parseFloat(prompt("Enter your gross income"));

  let benefits = parseFloat(prompt("Enter your benefits"));

  let grossIncome = basicSalary + benefits;

  let nssfContribution = 0;

  if (grossIncome <= 5999) {
    nssfContribution = 150;
  } else if (grossIncome >= 6000 && grossIncome <= 7999) {
    nssfContribution = 300;
  } else if (grossIncome >= 8000 && grossIncome <= 11999) {
    nssfContribution = 400;
  } else if (grossIncome >= 12000 && grossIncome <= 14999) {
    nssfContribution = 500;
  } else if (grossIncome >= 15000 && grossIncome <= 19999) {
    nssfContribution = 600;
  } else if (grossIncome >= 20000 && grossIncome <= 24999) {
    nssfContribution = 750;
  } else if (grossIncome >= 25000 && grossIncome <= 29999) {
    nssfContribution = 850;
  } else if (grossIncome >= 30000 && grossIncome <= 34999) {
    nssfContribution = 900;
  } else if (grossIncome >= 35000 && grossIncome <= 39999) {
    nssfContribution = 950;
  } else if (grossIncome >= 40000 && grossIncome <= 44999) {
    nssfContribution = 1000;
  } else if (grossIncome >= 45000 && grossIncome <= 49999) {
    nssfContribution = 1100;
  } else if (grossIncome >= 50000 && grossIncome <= 59999) {
    nssfContribution = 1200;
  } else if (grossIncome >= 60000 && grossIncome <= 69999) {
    nssfContribution = 1300;
  } else if (grossIncome >= 70000 && grossIncome <= 79999) {
    nssfContribution = 1400;
  } else if (grossIncome >= 80000 && grossIncome <= 89999) {
    nssfContribution = 1500;
  } else if (grossIncome >= 90000 && grossIncome <= 99999) {
    nssfContribution = 1600;
  } else {
    nssfContribution = 1700;
  }

  let nhifContribution = grossIncome * 0.06;

  let totalDeductable = nssfContribution + nhifContribution;

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
