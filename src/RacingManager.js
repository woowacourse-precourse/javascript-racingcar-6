class RacingManager {
  constructor(cars, count, data) {
    this.cars = cars;
    this.count = count;
    this.data = data;
    this.state = Array(this.cars.length).fill(0);
  }

  validMoving() {
    const moving = this.data.generateRandomNumbers();

    if (moving >= 4) return true;
  }

  racing() {
    this.state.map((_, idx) => {
      if(this.validMoving()) this.state[idx] += 1;
    })
  }

  racingResult() {
    const list = [];
    for (let i = 0; i < this.count; i++) {
      this.racing();
      list.push([...this.state]);
    }

    return list;
  }

  determineWinner() {
    const winner = [];
    const maxScore = Math.max(...this.state);
    this.state.map((score, idx) => {
      if (score === maxScore) winner.push(this.cars[idx]);
    })

    return winner;
  }
}

export default RacingManager;

// 데이터 의존성 주입?