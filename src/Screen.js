import { Console } from '@woowacourse/mission-utils';

const MSG_GAME_START =
  '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n';

class Screen {
  async getUserInput(message) {
    const userInput = await Console.readLineAsync(message);
    return userInput;
  }

  printCarStatus([...carList]) {
    carList.forEach((car) => {
      Console.print(`${car.name} : ${this.makeDashString(car.movingCount)}`);
    });
  }

  makeDashString(moveCount) {
    let str = '';
    for (let i = 0; i < moveCount; i++) {
      str += '-';
    }
    return str;
  }

  printWinner(winnerList) {}
}
export default Screen;
