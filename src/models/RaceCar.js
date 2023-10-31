export default class RaceCar {
  constructor(name) {
    this.name = name;
    this.distance = 0;
  }

  move() {
    this.distance++;
  }

  isWinner(maxDistance) {
    return this.distance === maxDistance;
  }
}
