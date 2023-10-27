import { Console } from "@woowacourse/mission-utils";
import Racing from '../model/Racing.js';
import { Comm, MESSAGE } from '../model/Comm.js';
import UserInput from '../view/UserInput.js';

class RacingcarController{

    #playCount

    constructor(){
        this.#playCount = 1;
    }

    async racingCarStart(){
        const RACING_CAR_NAME = await this.userInput.inputRacingcarName();
        const RACING_OUTPUT_NAME = this.comm.carNameOutPutUpdate(RACING_CAR_NAME);
        const RACING_COUNT = await this.userInput.inputRacingCount();
        Console.print(MESSAGE.RACING_PLAY);

        while(this.#playCount <= RACING_COUNT){
            const RACING_CAR_FORWARD_NUMBER = this.racing.randomForwardCount(RACING_OUTPUT_NAME.length);
        }
    }
}

export default RacingcarController