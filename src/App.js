import { GAME_MESSEAGE } from "./constants/Messeage.js";
import RacingController from "./controller/RacingController.js";
import { Console } from "@woowacourse/mission-utils";
import { randomArrayGenerator } from "./util/RandomArrayGenerator.js";
import Error from "./error/Error.js";

import { getPlayersName, getAttemptNumber } from "./controller/GameCustomize.js";

class App {
  
  async play() {
    const a = await getPlayersName();
    const b = await getAttemptNumber();

    Console.print('');
    const j = new RacingController(a,b);
    j.startRacing(randomArrayGenerator(a.length))
  }

  
  /*
  constructor() {
    
    this.error = new Error();
  }

  
  async play() {
    const playersArray = await Console.readLineAsync(`${GAME_MESSEAGE.inputName}\n`);
    this.error.name(playersArray);

    const k = playersArray.split(',');
    
    const attemptNumber = await Console.readLineAsync(`${GAME_MESSEAGE.inputAttempt}\n`);
    this.error.attempt(attemptNumber);
    
    Console.print('');

    const a = new RacingController(k, Number(attemptNumber));
    a.startRacing(randomArrayGenerator(k.length));
     
    
  }
  */
  


}

/*
const app = new App()
app.play();
*/

export default App;
