export default class Car {
  constructor(name) {
    this.name = name;
    this.racing = '';
  }

  updateRacingStatus() {
    this.racing += '-';
  }

  getRacingLength() {
    return this.racing.length;
  }
}
