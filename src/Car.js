export default class Car {
  constructor(name) {
    /** @type string */
    this.name = name;
    /** @type number */
    this.position = 0; 
  }

  forward() {
    this.position += 1;
  }
}