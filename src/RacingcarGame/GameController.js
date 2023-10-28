import { GameText } from '../Message';
import GameModel from './GameModel';
import GameUtil from './GameUtil';
import GameView from './GameView';
import { MissionUtils } from '@woowacourse/mission-utils';

class GameController {
  constructor() {
    this.model = null;
    this.view = new GameView();
    this.util = new GameUtil();
  }
  async start() {
    // 게임에 필요한 변수 값을 사용자로 부터 받아옴
    const CAR_NAMES = await this.getCarnameInput();
    MissionUtils.Console.print(CAR_NAMES.join(','));
    const ATTEMPTS = await this.getRacingcarAttempts();
    MissionUtils.Console.print(ATTEMPTS);

    // 사용자의 입력값을 기반으로 게임 모델을 생성 후 결과 출력
    this.model = new GameModel(CAR_NAMES, ATTEMPTS);
    this.model.registerController(this);
    MissionUtils.Console.print('실행결과');
    this.model.run();

    const winners = this.model.getWinner();
    this.view.printWinners(winners);
  }

  async getCarnameInput() {
    this.view.printGetMessage(GameText.GET_CAR_NAME);
    const getUserInput = await MissionUtils.Console.readLineAsync();
    const cars = getUserInput.split(',');
    await cars.forEach(car => this.util.carNameVaildator(car));

    return getUserInput.split(',');
  }

  async getRacingcarAttempts() {
    this.view.printGetMessage(GameText.GET_GAME_ATTEMPTS);
    const getAttempts = await MissionUtils.Console.readLineAsync();
    await this.util.attemptsValidator(getAttempts);

    return getAttempts;
  }

  updateCarProgress(cars) {
    this.view.printCarProgress(cars);
  }
}

export default GameController;
