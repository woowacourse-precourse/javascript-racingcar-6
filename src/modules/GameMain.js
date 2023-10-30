import { Console } from "@woowacourse/mission-utils";
import Participant from "./Participant.js";
import Attempt from "./Attempt.js";

class GameMain {
  async userCarName() {
    const userInput = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );

    this.participant = new Participant(userInput);
    this.Attempt = new Attempt();

    if (this.participant.validate()) this.Attempt.userInputTry();
  }
}

export default GameMain;
