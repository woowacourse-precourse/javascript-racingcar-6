class Car {
  moveOrStop(randomNum) {
    if (randomNum >= 4) {
      return 1;
    }
    if (randomNum < 4) {
      return 0;
    }
  }
}

export default Car;