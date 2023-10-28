import printLocation from "./printLocation.js";

function goFoward(cars) {
  for (let i = 0; i < cars.length; i++) {
    if (cars[i].curMoveValue >= 4) {
      cars[i].curLocation = cars[i].curLocation + 1;
    }
  }
  printLocation(cars);
}

export default goFoward;
