import { GAME_MESSEAGE } from "./constants/Messeage.js";
import RacingController from "./controller/RacingController.js";
import { Console } from "@woowacourse/mission-utils";
import { randomArrayGenerator } from "./util/RandomArrayGenerator.js";
import Error from "./error/Error.js";

class App {
  

  async play() {
    const playersArray = await Console.readLineAsync(`${GAME_MESSEAGE.inputName}\n`);

    const check = new Error();
    check.name(playersArray);

    const k = playersArray.split(',');
    
    const attemptNumber = await Console.readLineAsync(`${GAME_MESSEAGE.inputAttempt}\n`);

    check.attempt(attemptNumber);

    Console.print('');

    const a = new RacingController(k, Number(attemptNumber));
    a.startRacing(randomArrayGenerator(k.length));
     
    
  }


}
/*
const app = new App()
app.play();
*/

export default App;
