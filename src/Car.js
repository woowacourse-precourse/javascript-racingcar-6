class Car {
  constructor(name) {
    this._name = name;
    this._position = '';
  }

  move(value) {
    if (value >= 4) {
      this._position += '-';
    }
  }

  printPosition() {
    return `${this._name} : ${this._position}`;
  }

  getPosition() {
    return this._position;
  }

  getName() {
    return this._name;
  }
}

export default Car;
