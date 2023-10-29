import { Console } from "@woowacourse/mission-utils"
import { checkValidCarsName, checkValidNumber} from "./Validation.js";

class View {

  async initCarName() {
    const input = await Console.readLineAsync('이름은 쉼표(,) 기준으로 구분\n');
    const inputList = input.split(',');
    checkValidCarsName(inputList);
    return inputList;
  }

  async initCountNumber() {
    const input = await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
    checkValidNumber(input);
    return Number(input);
    Console.print(error.message);
  }
}

export default View;