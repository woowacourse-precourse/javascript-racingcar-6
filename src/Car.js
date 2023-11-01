export class Car {
  name;
  result = "";
  constructor(name) {
    this.name = name;
  }

  moveSimulate(count) {
    if (count >= 4) this.result += "-";
  }
  printResult() {
    return `${this.name} : ${this.result}`;
  }
}
