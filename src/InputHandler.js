import { Console } from "@woowacourse/mission-utils";

const CAR_NAMES_PROMPT = "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)";
const ROUNDS_PROMPT = "시도할 횟수는 몇 회인가요?";
const CAR_NAME_ERROR = "[ERROR] 자동차 이름은 5자 이하만 가능하고, 쉼표로 구분해야 합니다.";
const ROUNDS_ERROR = "[ERROR] 시도할 횟수는 양의 정수여야 합니다.";

export default class InputHandler {
  async getInputCarNames() {
    const names = await Console.readLineAsync(CAR_NAMES_PROMPT);
    if (!this.isValidNames(names)) {
      throw new Error(CAR_NAME_ERROR);
    }
    return names.split(",");
  }

  async getInputRounds() {
    const rounds = await Console.readLineAsync(ROUNDS_PROMPT);
    if (!this.isValidRounds(rounds)) {
      throw new Error(ROUNDS_ERROR);
    }
    return Number(rounds);
  }

  isValidNames(names) {
    const nameArray = names.split(",");
    return nameArray.every(name => name.length > 0 && name.length <= 5);
  }

  isValidRounds(rounds) {
    const numberRounds = Number(rounds);
    return Number.isInteger(numberRounds) && numberRounds > 0;
  }
}
