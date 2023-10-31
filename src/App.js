import { Console } from "@woowacourse/mission-utils";
import continueOrEnd from "./Game/ContinueOrEnd.js";
import fowardConditions from "./Game/FowardCondition.js";
import gameSetting from "./Game/GameSetting.js";
import message from "./Message.js";
import loserResult from "./Game/LoserResult.js";

class App {
  async play() {
    await Console.print(message.game.START_MESSAGE);
    const cars = await Console.readLineAsync('');
    let winner = [];
    const loser = [];
    let carsScores = await gameSetting(cars, loser);
    await Console.print(message.game.ATTEMPTS_NUMBER_QUESTION);
    const numberOfAttempts = await Console.readLineAsync('');
    if(isNaN(numberOfAttempts) == true) throw Error(message.error.NOT_A_NUMBER_ERROR);
    Console.print(message.game.PROCESS_RESULT);
    for(let j = 1; j<=numberOfAttempts;j++){
      await fowardConditions(carsScores,numberOfAttempts,winner);
      await Console.print('');
    }
    await Console.print(message.game.RESULT_WINNER_PRINT+winner.join(', '));
    await Console.print(message.game.RESULT_LOSER_PRINT+await loserResult(winner,loser).join(', '));
    Console.print(message.game.CONTINUE_OR_STOP_QUESTION);
    const status = await Console.readLineAsync('');
    await continueOrEnd(status,this);
  }
}
export default App;
