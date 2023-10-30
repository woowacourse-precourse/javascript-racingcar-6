import InputView from './view/InputView';
import RacingGame from './game/RacingCar';
import OutputView from './view/OutputView';

class App {

  async play() {
    const racingGame = new RacingGame();

    const carNames = (await InputView.getCarNames()).split(',');
    carNames.forEach((name) => racingGame.addCar(name));
    
    const attempts = await InputView.getAttempts();
    await OutputView.printResult();
    await racingGame.startGame(attempts);

    const winners = racingGame.getWinners();
    await OutputView.printWinner(winners);
  }
}

export default App;