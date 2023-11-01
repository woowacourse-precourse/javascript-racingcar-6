import { Random } from '@woowacourse/mission-utils';

class Background {
  constructor() {
    this.moves = 0;
    this.cars = {};
  }

  // getters & setters
  getCars() {
    return this.cars;
  }

  setCars(cars) {
    this.cars = { ...cars };
  }

  getMoves() {
    return this.moves;
  }

  setMoves(moves) {
    this.moves = moves;
  }

  // queries
  move() {
    const cars = this.getCars();
    const names = Array.from(Object.keys(cars));

    for (let i = 0; i < names.length; i += 1) {
      const name = names[i];
      const number = Random.pickNumberInRange(0, 9);
      if (number >= 4) {
        cars[name] += 1;
      }
    }

    this.setCars(cars);
  }

  champions() {
    const cars = this.getCars();
    const maxPos = Math.max(...Object.values(cars));

    const champions = Object.keys(cars).filter((name) => cars[name] === maxPos);
    return champions;
  }

  // initializer
  initRace(names, moves) {
    const cars = {};

    for (let i = 0; i < names.length; i += 1) {
      cars[names[i]] = 0;
    }

    this.setCars(cars);
    this.setMoves(moves);
  }
}

export default Background;
