import Car from './Car.js';
import Validation from './Validation.js';
import Screen from './Screen.js';

const MSG_GAME_START =
  '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n';
const MSG_TRY_TIME = '시도할 횟수는 몇 회인가요?\n';
const ERROR_MSG_INPUT = '[ERROR] 자동차 이름이 잘못된 형식입니다.';

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
    const screen = new Screen();
    const validation = new Validation();
    const participants = await screen.getUserInput(MSG_GAME_START);
    if (!validation.isProperInput(participants)) {
      throw new Error(ERROR_MSG_INPUT);
    }

    participants.split(',').forEach((carName) => {
      this.addPlayer(carName);
    });
  }

  async decideGameCount() {
    const screen = new Screen();
    const validation = new Validation();
    const gameCount = await screen.getUserInput(MSG_TRY_TIME);
    if (!validation.isProperTryTime(gameCount)) {
      throw new Error(ERROR_MSG_INPUT);
    }

    this.numberOfGames = gameCount;
  }

  race() {
    const screen = new Screen();
    screen.printMessage('\n실행 결과');
    for (let i = 0; i < this.numberOfGames; i++) {
      this.players.forEach((car) => {
        car.move();
        screen.printCarStatus(car.status());
      });
      screen.printEmptyLine();
    }
  }

  calculateWinner() {
    const screen = new Screen();
    const max = this.players.reduce((prev, current) => {
      if (prev > current.getMovingCount()) {
        return prev;
      }

      return current.getMovingCount();
    }, 0);

    const winnerList = this.players.filter((car) => {
      return max === car.getMovingCount();
    });

    screen.printWinner(winnerList.map((car) => car.getCarName()));
  }
}
export default Racing;
