class Car {
  constructor(name) {
    this.name = name;
    this.forwardCount = 0;
  }

  moveForward() {
    this.forwardCount++;
  }

  printProgress() {
    return "-".repeat(this.forwardCount);
  }
}

export default Car;
