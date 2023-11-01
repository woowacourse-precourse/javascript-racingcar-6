import { Console } from "@woowacourse/mission-utils";

export default class GameSettingInput {
  static async collect() {
    const carNames = (
      await Console.readLineAsync(
        "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
      )
    ).split(",");
    GameSettingInput.validate(carNames);
    const trialCount = Number(
      await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n")
    );
    return { carNames, trialCount };
  }

  static validate(carNames) {
    if (!carNames.every((carName) => carName.length <= 5))
      throw Error("[ERROR] 자동차 이름은 5글자 이하여야 합니다.");
  }
}
