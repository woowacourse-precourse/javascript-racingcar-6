class App {
  async play() {}

  async getPlayerCarsInput() {
    const ANSWER = await Console.readLineAsync();
  }
}

export default App;

// 필요한 함수들
// getPlayerCarsInput
// isPlayerCarNameValidated
// getPlayerTryNumberInput
// isPlayerTryNumberValidated
// startRace
// shouldCarMoveForward
// addCarMoveProgressBar
// checkWinners
// printRaceStatus
// printWinners
