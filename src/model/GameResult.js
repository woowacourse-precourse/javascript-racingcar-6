class GameResult {
  getForwardResult(carPosition, prevLog) {
    console.log('prev: ', carPosition);
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
    console.log(`after: `, carPosition);
    console.log(`forward: `, prevLog);
    return prevLog;
  }
}

export default GameResult;
