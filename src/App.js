import GameQnA from './classes/gameQnA';
import Validator from './classes/validator';
import RacingGame from './classes/racingGame';
import GameManager from './classes/gameManager';

class App {
  async play() {
    const carNameInput = await GameQnA.carsName();
    Validator.carsNameInput(carNameInput);
    const tryTimeInput = await GameQnA.tryTime();
    Validator.tryTimeInput(tryTimeInput);

    const racingGame = new RacingGame(carNameInput);
    const game = racingGame.play(tryTimeInput);
    let racingStatus = game.next();
    /**
     * 제너레이터 객체가 done이 true가 되었을 시 value는 undefined를 반환함
     * 이를 해결하기 위해 lastRacingStatus를 변수를 통해 값을 할당
     * lastRacingStatus 변수에 할당되어 있는 마지막 상태를 통해 우승자 결과 값 계산
     */
    let lastRacingStaus;

    while (!racingStatus.done) {
      GameManager.printStatus(racingStatus.value);
      lastRacingStaus = racingStatus.value;
      racingStatus = game.next();
    }

    GameManager.printWinner(lastRacingStaus);
  }
}

export default App;
