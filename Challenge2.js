//This function prompts the user to input their speed and prints out a response according to the value they inputted.
function speedDetector() {
  //Prompts the user to input their speed
  let speed = prompt("Input the speed of your car:");
  //Declares the variable speedLimit and sets it at 70KM/H
  let speedLimit = 70;
  //Declares the variable totalDemerits which changes according to the speed of users
  let totalDemerits = 0;

  //The if else statements calculates overspeeding if a user goes above the speed limit and prints out their demerits.
  if (speed > 70) {
    let overSpeeding = speed - speedLimit;
    let demerits = Math.floor(overSpeeding / 5);

    totalDemerits += demerits;
    alert(`Points: ${totalDemerits} `);

    //If the total demerits of a user is equal to or above 12 the function alerts the user that their licence is suspended otherwise it prints out OK.
    if (totalDemerits >= 12) {
      alert("License suspended!");
    }
  } else {
    alert("Ok");
  }
}

//Calls the function speedDetector
speedDetector();
