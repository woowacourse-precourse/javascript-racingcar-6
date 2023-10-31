class Racing {
  constructor(carNames, count, data) {
    this.carNames = carNames;
    this.count = count;
    this.data = data;
    this.state = Array(this.carNames.length).fill(0);
  }

  validAdvance() {
    const moving = this.data.generateRandomNumbers();

    if (moving >= 4) return true;
  }

  advance() {
    this.state.map((_, idx) => {
      if(this.validAdvance()) this.state[idx] += 1;
    })
  }

  result() {
    const listState = [];

    for (let i = 0; i < this.count; i++) {
      this.advance();
      listState.push([...this.state]);
    }

    return listState;
  }

  determineWinner() {
    const winner = [];
    const maxAdvance = Math.max(...this.state);

    this.state.map((totalAdvance, idx) => {
      if (totalAdvance === maxAdvance) winner.push(this.carNames[idx]);
    })

    return winner;
  }
}

export default Racing;