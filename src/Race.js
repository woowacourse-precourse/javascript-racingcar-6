class Race {
  constructor(cars, round) {
    this.round = round;
    this.cars = cars;
  }

  start() {
    
    for (let i = 0; i < this.round; i+= 1) {
      this.playRound();
    }
    
  }

  playRound() {
    this.cars.forEach((car) => {
      car.move();
    });
  }
}

export default Race;