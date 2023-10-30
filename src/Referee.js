class Referee {
  constructor() {
    this.departureCountArr = [];
    this.max = '';
    this.winnerArr = [];
  }
  compareWinner(carArr) {
    carArr.forEach((car) => {
      this.departureCountArr.push(car.departureCount.length);
    });

    this.max = Math.max(...this.departureCountArr);

    carArr.forEach((car) => {
      if (car.departureCount.length === this.max) {
        this.winnerArr.push(car.carName);
      }
    });

    return this.winnerArr.join(', ');
  }
}
export default Referee;
