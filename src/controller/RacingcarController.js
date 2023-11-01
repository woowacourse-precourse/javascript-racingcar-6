import Racing from '../model/Racing.js';
import UserInOutput from '../view/UserInOutput.js';

class RacingcarController{

    #playCount;
    #racingCarPlay;

    constructor(){
        this.#playCount = 1;
        this.#racingCarPlay = '';
        this.racingCarWinner = [];
        this.racing = new Racing(this);
        this.userInOutput = new UserInOutput(this);
    }

    async racingCarStart(){
        const RACING_CAR_NAME = await this.userInOutput.inputRacingcarName();
        const RACING_OUTPUT_NAME = this.racing.carNameUpdate(RACING_CAR_NAME);
        const RACING_COUNT = await this.userInOutput.inputRacingCount();
        this.#racingCarPlaying(RACING_CAR_NAME, RACING_OUTPUT_NAME, RACING_COUNT);
    }

    #racingCarPlaying(carName, outputName, racingCount){
        this.userInOutput.playGameResultOutputMsg();
        while(this.#playCount <= racingCount){
            const RACING_CAR_FORWARD_NUMBER = this.racing.randomForwardCount(outputName.length);
            this.#racingCarPlay = this.racing.racingPlay(outputName, RACING_CAR_FORWARD_NUMBER);
            this.userInOutput.outputRacingMessage(this.#racingCarPlay);
            this.#playCount++;
        }
        this.#racingCarResult(carName, this.#racingCarPlay);
    }

    #racingCarResult(carName, racingCarPlay){
        const RACING_CAR_RESULT = this.racing.racingCarResult(racingCarPlay);
        this.userInOutput.outputWinnerMessage(carName, RACING_CAR_RESULT);    
    }
}

export default RacingcarController