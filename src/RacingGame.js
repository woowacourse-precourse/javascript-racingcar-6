class RacingGame {
  async getRaceTimes() {
    const raceTimes = await Console.readLineAsync('시도할 횟수는 몇 회인가요?');
    return Number(raceTimes);
  }
}

export default RacingGame;
