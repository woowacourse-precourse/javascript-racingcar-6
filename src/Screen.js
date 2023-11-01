import { Console } from '@woowacourse/mission-utils';
class Screen {
  async getUserInput(message) {
    const userInput = await Console.readLineAsync(message);
    return userInput;
  }

  printCarStatus(carStatus) {
    Console.print(carStatus);
  }

  printWinner([...winnerList]) {
    Console.print(`최종 우승자 : ${winnerList.join(', ')}`);
  }

  printEmptyLine() {
    Console.print('');
  }

  printMessage(message) {
    Console.print(message);
  }

  static makeDashString(moveCount) {
    let str = '';
    for (let i = 0; i < moveCount; i++) {
      str += '-';
    }

    return str;
  }
}
export default Screen;
