import RaceCar from "./RaceCar";
export default class Race {
  constructor(carNames) {
    this.cars = carNames.map((name) => new RaceCar(name));
    this.maxDistance = 0;
  }

  runRound() {
    this.cars.forEach((car) => {
      car.go();
      if (car.distance > this.maxDistance) {
        this.maxDistance = car.distance;
      }
    });
  }

  findWinners() {
    return this.cars
      .filter((car) => car.isWinner(this.maxDistance))
      .map((car) => car.name);
  }
}
