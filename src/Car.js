class Car {
  constructor(name) {
    this.name = name;
    this.moves = 0;
  }

  printMoves() {
    let totalMoves = '';
    for (let i = 0; i < this.moves; i += 1) {
      totalMoves += '-';
    }
    return totalMoves;
  }
}

export default Car;
