import { Console } from '@woowacourse/mission-utils';
class Screen {
  static async getUserInput(message) {
    const userInput = await Console.readLineAsync(message);
    return userInput;
  }

  static printCarStatus(carStatus) {
    Console.print(carStatus);
  }

  static printWinner([...winnerList]) {
    Console.print(`최종 우승자 : ${winnerList.join(', ')}`);
  }

  static printEmptyLine() {
    Console.print('');
  }

  static printMessage(message) {
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
