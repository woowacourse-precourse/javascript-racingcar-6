class Referee {
  constructor() {
    this.departureCountArray = [];
    this.max = '';
    this.winnerArray = [];
  }
  compareWinner(carArray) {
    carArray.forEach((carElement) => {
      this.departureCountArray.push(carElement.departureCount.length);
    });

    this.max = Math.max(...this.departureCountArray);

    carArray.forEach((carElement) => {
      if (carElement.departureCount.length === this.max) {
        this.winnerArray.push(carElement.carName);
      }
    });

    return this.winnerArray.join(', ');
  }
}
export default Referee;
