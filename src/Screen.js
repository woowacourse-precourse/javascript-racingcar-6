import { Console } from '@woowacourse/mission-utils';

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

  printWinner([...winnerList]) {
    Console.print(`최종 우승자 : ${winnerList.join(', ')}`);
  }

  makeDashString(moveCount) {
    let str = '';
    for (let i = 0; i < moveCount; i++) {
      str += '-';
    }
    return str;
  }
}
export default Screen;
