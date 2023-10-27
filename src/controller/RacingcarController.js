import { Console } from "@woowacourse/mission-utils";
import Racing from '../model/Racing.js';
import { Comm, MESSAGE } from '../model/Comm.js';
import UserInput from '../view/UserInput.js';

class RacingcarController{

    #playCount
    #racingCarPlay

    constructor(){
        this.#playCount = 1;
        this.#racingCarPlay = '';
        this.racingCarWinner = [];
        this.comm = new Comm();
        this.racing = new Racing(this);
        this.userInput = new UserInput(this);
    }

    async racingCarStart(){
        const RACING_CAR_NAME = await this.userInput.inputRacingcarName();
        const RACING_OUTPUT_NAME = this.comm.carNameOutPutUpdate(RACING_CAR_NAME);
        const RACING_COUNT = await this.userInput.inputRacingCount();
        Console.print(MESSAGE.RACING_PLAY);

        while(this.#playCount <= RACING_COUNT){
            const RACING_CAR_FORWARD_NUMBER = this.racing.randomForwardCount(RACING_OUTPUT_NAME.length);
            this.#racingCarPlay = this.racing.racingPlay(RACING_OUTPUT_NAME, RACING_CAR_FORWARD_NUMBER);
            this.comm.outputRacingMessage(this.#racingCarPlay);
            this.#playCount++;
        }
        const RACING_CAR_RESULT = this.racing.racingCarResult(this.#racingCarPlay);
    }
}

export default RacingcarController