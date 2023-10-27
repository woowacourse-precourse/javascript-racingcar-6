export class Car {
  constructor(name) {
    this.name = name;
    this.position = 0;
  }
  move() {
    this.position += 1;
  }
  set name(newName) {
    this._name = newName;
  }
  set position(newPosition) {
    this._position = newPosition;
  }
  get name() {
    return this._name;
  }
  get position() {
    return this._position;
  }
}
