import printLocation from "./printLocation.js";

function goFoward(cars) {
  for (let i = 0; i < cars.length; i++) {
    if (cars[i].curMoveValue >= 4) {
      cars[i].distance = cars[i].distance + "-";
    }
  }
  printLocation(cars);
}

export default goFoward;
