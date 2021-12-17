// Code your solution in this file!
function distanceFromHqInBlocks(pickup) {
  if (pickup >= 42) {
    return pickup - 42;
  } else {
    return 42 - pickup;
  }
}

function distanceFromHqInFeet(start) {
  return distanceFromHqInBlocks(start) * 264;
}

function distanceTravelledInFeet(start, destination) {
  if (start < destination) {
    return (destination - start) * 264;
  } else {
    return (start - destination) * 264;
  }
}

function calculatesFarePrice(start, destination) {
  let total = distanceTravelledInFeet(start, destination);
  if (total <= 400) {
    return 0;
  } else if (total > 400 && total <= 2000) {
    return (total - 400) * 0.02;
  } else if (total >= 2000 && total <= 2500) {
    return 25;
  } else {
    return "cannot travel that far";
  }
}
