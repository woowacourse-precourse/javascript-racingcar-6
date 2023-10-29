class GameResult {
  getForwardResult(carPosition, prevLog) {
    carPosition.forEach((value, carName) => {
      switch (true) {
        case value > 0:
          carPosition.set(carName, value - 1);
          let log = prevLog.get(carName) || 0;
          log += 1;
          prevLog.set(carName, log);
          break;
        default:
          prevLog.set(carName, prevLog.get(carName) || 0);
      }
    });
    return prevLog;
  }

  getWinner(carLog) {
    const values = Array.from(carLog.values());
    const maxValue = Math.max(...values);
    const winners = [];

    carLog.forEach((value, carName) => {
      if (value === maxValue) {
        winners.push(carName);
      }
    });
    return winners.join(', ');
  }
}

export default GameResult;
