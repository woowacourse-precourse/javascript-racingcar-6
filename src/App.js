import fowardConditions from "./Game/FowardCondition.js";
import { Console } from "@woowacourse/mission-utils";
import gameSetting from "./Game/GameSetting.js";
import message from "./Message.js";

class App {
  async play() {
    await Console.print(message.game.START_MESSAGE);
    const cars = await Console.readLineAsync('');
    const users = cars.split(',');
    let carsScores = [];
    let winner = [];
    carsScores = await gameSetting(users,carsScores);
    await Console.print(message.game.ATTEMPTS_NUMBER_QUESTION);
    const numberOfAttempts = await Console.readLineAsync('');
    if(typeof(numberOfAttempts) != "number") await Console.print(message.error.NOT_A_NUMBER_ERROR);
    Console.print(message.game.PROCESS_RESULT);
    for(let j = 1; j<=numberOfAttempts;j++){
      await fowardConditions(carsScores,numberOfAttempts,winner);
      await Console.print('');
    }
    await Console.print(message.game.RESULT_PRINT+winner.join(','));

    const status = await Console.readLineAsync(message.game.CONTINUE_OR_STOP_QUESTION);
    if(status == 1) this.play();
    else if(status == 2) await Console.print(message.game.END_MESSAGE);
  }
}
export default App;
