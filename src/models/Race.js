class Race {
  static getScoreBoard(carNames) {
    const scoreBoard = {};
    carNames.forEach(el => (carNames[el] = 0));
    return scoreBoard;
  }
}

export default Race;
