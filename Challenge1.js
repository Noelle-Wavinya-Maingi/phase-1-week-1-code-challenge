//This function is expected to output a grade after a user inputs marks thar are between 0 and 100
function gradeGenerator() {
  let marks = prompt("Kindly input your marks");
  //The first switch case checks if the value inputted by a user is greater than 100 and less than 0. If it is it alerts Invalid grade and breaks otherwise it goes to default.
  switch (true) {
    case marks > 100 || marks < 0:
      alert("Invalid Grade! Kindly Enter a valid grade");
      break;
    //The default is that the marks are checked to see if it fits in a particular case and breaks at the said case if not it goes to default and alerts Your grade is E
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
//This calls the function which is gradeGenerator.
gradeGenerator();
