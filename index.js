// Code your solution in this file!

function distanceFromHqInBlocks(value) {
    if (value > 42) return value - 42;
    else (value < 42)
    return 42 - value;
    //returns the number of blocks given a value
  }

  function distanceFromHqInFeet(value) {
    if (value > 42) return (value - 42) * 264;
    else (value < 42)
    return (42 - value) * 264;
  }

  function distanceTravelledInFeet(start, destination) {
    if (destination > start)
    return (destination - start) * 264;
    else (start > destination)
    return (start - destination) * 264;
  }

  function calculatesFarePrice(start1, destination1) {
    let blockDistance = Math.abs(start1 - destination1);
    let distanceTravel = blockDistance * 264;
    if (distanceTravel < 400) {
      console.log("give customers a free sample");
      return 0;
    };
    else if (distanceTravel >= 2500) return "cannot travel that far";
    else if (400 < distanceTravel && distanceTravel < 2000) {
      let rideCost = (distanceTravel - 400) * 0.02
    };
    else if
  }
