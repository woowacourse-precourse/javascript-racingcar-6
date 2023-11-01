import Car from './Car.js';
import Validation from './Validation.js';
import Screen from './Screen.js';

const MSG_GAME_START =
  '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n';
const MSG_TRY_TIME = '시도할 횟수는 몇 회인가요?\n';
const ERROR_MSG_INPUT = '[ERROR] 자동차 이름이 잘못된 형식입니다.';
const ERROR_MSG_GAMECOUNT = '[ERROR] 시도 횟수 입력이 잘못되었습니다.';
const MSG_EMPTY_LINE = '';
const MSG_RESULT = '\n실행 결과';

class Racing {
  constructor() {
    this.players = [];
    this.numberOfGames = 0;
  }

  addPlayer(carName) {
    const car = new Car(carName);
    this.players.push(car);
  }

  async registration() {
    const participants = await Screen.getUserInput(MSG_GAME_START);
    if (!Validation.isProperInput(participants)) {
      throw new Error(ERROR_MSG_INPUT);
    }

    participants.split(',').forEach((carName) => {
      this.addPlayer(carName);
    });
  }

  async decideGameCount() {
    const gameCount = await Screen.getUserInput(MSG_TRY_TIME);
    if (!Validation.isProperTryTime(gameCount)) {
      throw new Error(ERROR_MSG_GAMECOUNT);
    }

    this.numberOfGames = gameCount;
  }

  race() {
    Screen.printMessage(MSG_RESULT);
    for (let i = 0; i < this.numberOfGames; i++) {
      this.players.forEach((car) => {
        car.move();
        Screen.printMessage(car.status());
      });
      Screen.printMessage(MSG_EMPTY_LINE);
    }
  }

  calculateWinner() {
    const max = this.players.reduce((prev, current) => {
      if (prev > current.getMovingCount()) {
        return prev;
      }

      return current.getMovingCount();
    }, 0);

    const winnerList = this.players.filter((car) => {
      return max === car.getMovingCount();
    });

    Screen.printWinner(winnerList.map((car) => car.getCarName()));
  }
}
export default Racing;
