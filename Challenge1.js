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
