import { Console } from "@woowacourse/mission-utils";
import UserInput from '../view/UserInput.js';

class RacingcarController{
    constructor(){
        
    }

    async racingCarStart(){
        const RACING_CAR_NAME = await this.userInput.inputRacingcarName();
        const RACING_OUTPUT_NAME = this.comm.carNameOutPutUpdate(RACING_CAR_NAME);
        const RACING_COUNT = await this.userInput.inputRacingCount();
    }
}

export default RacingcarController