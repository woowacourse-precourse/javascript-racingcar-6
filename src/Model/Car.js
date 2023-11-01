import { GO_FORWARD } from "../constatnts/index.js";

class Car {
  constructor() {
    this.cars = [];
  }

  init(cars) {
    this.cars = cars;
  }

  // 3-2. 무작위 값이 4 이상일 경우 해당 자동차를 전진시킨다
  move(numbers) {
    const newPositions = this.cars.map(car => {
      const randomValue = numbers.shift();

      if (randomValue >= GO_FORWARD) {
        return car.position + 1;
      }

      return car.position;
    });

    this.cars.forEach((car, idx) => {
      Object.assign(car, { position: newPositions[idx] });
    });

    return this.cars;
  }
}

export default Car;
