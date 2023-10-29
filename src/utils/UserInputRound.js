import { Console } from "@woowacourse/mission-utils";
import { QUESTION_GOAL_COUNT, ERROR_WRONG_ROUND } from "../const/Messages";

class UserInputRound {
  constructor() {
    this.rounds = 0;
  }

  async inputRounds() {
    Console.print(QUESTION_GOAL_COUNT);
    const userInput = await Console.readLineAsync();
    const rounds = parseInt(userInput, 10);

    this.setRounds(rounds);
  }

  setRounds(rounds) {
    const roundsValid = !Number.isNaN(rounds) && rounds > 0;
    if (!roundsValid) {
      throw new Error(ERROR_WRONG_ROUND);
    }

    this.rounds = rounds;
  }

  getRounds() {
    return this.rounds;
  }
}

export default UserInputRound;
