import { Console } from "@woowacourse/mission-utils";

const INPUTVIEW_MESSAGE = Object.freeze({
  promptCarNames_message:
    "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)",
  promptRaceRound_message: "시도할 횟수는 몇 회인가요?",
});

export default class InputView {
  static async promptCarNames() {
    const input = await Console.readLineAsync(
      `${INPUTVIEW_MESSAGE.promptCarNames_message}\n`
    );
    return input.split(",");
  }

  static async promptRaceRound() {
    const input = await Console.readLineAsync(
      `${INPUTVIEW_MESSAGE.promptRaceRound_message}\n`
    );
    console.log(isNaN(input));
    return input;
  }
}
