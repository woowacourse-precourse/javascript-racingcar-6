import { Console } from "@woowacourse/mission-utils";
import Validation from "../utils/Validation";

class ConsoleView {
  constructor() {
    this.validation = new Validation();
  }

  async inputRacingcar() {
    const inputCar = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)',
    );
    const racingCarList = inputCar.split(',');
    this.validation.validateInputCar(racingCarList);
    return racingCarList;
  }

  async inputRacingNum() {
    const inputNumber =
      await Console.readLineAsync('시도할 횟수는 몇 회인가요?');
    this.validation.validateInputNumber(inputNumber);
    Console.print('실행 결과');
    return inputNumber;
  }

  outputRacingResult = (carName, distanceList, index) => {
    Console.print(`${carName} : ${'-'.repeat(distanceList[index])}`);
  };

  outputFinalWinner = (winnerCarList) => {
    if (winnerCarList.length === 1) {
      Console.print(`최종 우승자 : ${winnerCarList[0]}`);
    } else {
      Console.print(`최종 우승자 : ${winnerCarList.join(', ')}`);
    }
  };
}

export default ConsoleView;
