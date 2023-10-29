import { Console } from "@woowacourse/mission-utils";
import Racing from '../model/Racing.js';
import { Comm } from '../model/Comm.js';
import { MESSAGE, ERROR_MESSAGE } from "../constant/OutputMessage.js";
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
        this.#racingCarPlaying(RACING_CAR_NAME, RACING_OUTPUT_NAME, RACING_COUNT);
    }

    #racingCarPlaying(carName, outputName, racingCount){
        Console.print(MESSAGE.RACING_PLAY);
        while(this.#playCount <= racingCount){
            const RACING_CAR_FORWARD_NUMBER = this.racing.randomForwardCount(outputName.length);
            this.#racingCarPlay = this.racing.racingPlay(outputName, RACING_CAR_FORWARD_NUMBER);
            this.comm.outputRacingMessage(this.#racingCarPlay);
            this.#playCount++;
        }
        this.#racingCarResult(carName, this.#racingCarPlay);
    }

    #racingCarResult(carName, racingCarPlay){
        const RACING_CAR_RESULT = this.racing.racingCarResult(racingCarPlay);
        this.comm.outputWinnerMessage(carName, RACING_CAR_RESULT);    
    }
}

export default RacingcarController