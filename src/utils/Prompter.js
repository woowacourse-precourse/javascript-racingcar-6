import { MissionUtils } from "@woowacourse/mission-utils";

export default class Prompter {
  async getUserInput(guide) {
    const userInputValue = await MissionUtils.Console.readLineAsync(guide);
    return userInputValue.toString();
  }
}
