export default class Result {
  constructor() {
    this.winners = [];
    this.longestDistance = 0;
  }
  
  getWinners(cars) {
    this.longestDistance = this.getLongestDistance(cars);
  
    cars.map((car) => {
      if (this.isCarWinner(car, this.longestDistance)) {
        this.winners.push(car.getName());
      }
    });
  
    return this.winners;
  }
  
  getLongestDistance(cars) {
    const AscendingSortedDistances = this.getDistances(cars).sort((a, b) => a - b);
  
    return AscendingSortedDistances.pop();
  }

  getDistances(cars) {
    return cars.map((car) => car.getDistance());
  }

  isCarWinner(car) {
    return car.getDistance() === this.longestDistance;
  }
}