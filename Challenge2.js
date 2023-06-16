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
