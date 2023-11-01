import { MissionUtils } from '@woowacourse/mission-utils';

const MIN_RANDOM_NUMBER = 0;
const MAX_RANDOM_NUMBER = 9;
const RANDOM_NUMBER_THRESHOLD = 4;

export class CarRacing {
  static pickNumberInRange(startInclusive, endInclusive) {
    return MissionUtils.Random.pickNumberInRange(startInclusive, endInclusive);
  }
}

export class RaceSimulator {
  constructor(carNames) {
    this.carNames = carNames;
    this.cars = carNames.map((name) => ({ name, position: '' }));
    this.raceResults = [];
  }

  simulateRace(tryNumber) {
    for (let i = 0; i < tryNumber; i++) {
      this.cars.forEach((car) => {
        this.moveCar(car);
      });
      this.generateRaceResults();
    }
  }

  moveCar(car) {
    const randomNumber = CarRacing.pickNumberInRange(MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER);
    if (randomNumber >= RANDOM_NUMBER_THRESHOLD) {
      car.position += '-';
    }
  }

  generateRaceResults() {
    const raceState = this.cars
      .map((car) => `${car.name} : ${car.position}`)
      .join('\n');
    this.raceResults.push(raceState);
  }

  getRaceResults() {
    return this.raceResults;
  }
}
