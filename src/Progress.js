import Output from "./Output.js";

const Progress = {
  carMovement(cars) {
    for (const car in cars) {
      cars[car].moveForward();
      Output.carMovement(cars[car].name, cars[car].current);
    }
  },
  tryCount(tryCount, cars) {
    for (let t = 0; t < tryCount; t++) {
      this.carMovement(cars);
    }
  },
  winner(cars) {
    let max = Math.max(...cars.map((car) => car.current));
    return cars.filter((car) => car.current === max).map((car) => car.name);
  },
};

export default Progress;
