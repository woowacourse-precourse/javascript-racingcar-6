export class Car {
  constructor(name) {
    this.name = name;
    this.foward = 0;
  }

  goFoward(randomNumber) {
    if (randomNumber >= 4) {
      this.foward++;
    }
  }
}
