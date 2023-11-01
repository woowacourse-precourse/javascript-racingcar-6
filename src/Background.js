import { Random } from '@woowacourse/mission-utils';

/*
raceState
0 : race uninitialized
1 : race's active
2 : race's end
*/

class Background {
  constructor() {
    this.raceState = 0;

    // race info
    this.moves = 0;
    this.cars = {};
  }

  // getters & setters
  getRaceState() {
    return this.raceState;
  }
  setRaceState(raceState) {
    this.raceState = raceState;
  }

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

    for (const name of Object.keys(cars)) {
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
  initRace(name, moves) {
    const cars = {};
    for (const i of name) {
      cars[i] = 0;
    }
    this.setCars(cars);
    this.setMoves(moves);
  }
}

export default Background;
