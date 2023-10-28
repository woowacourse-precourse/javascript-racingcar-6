import printResult from "./printResult.js";

function goFoward(cars) {
  for (let i = 0; i < cars.length; i++) {
    if (cars[i].curMoveValue >= 4) {
      cars[i].curLocation = cars[i].curLocation + 1;
    }
  }
  printResult(cars);
}

export default goFoward;
