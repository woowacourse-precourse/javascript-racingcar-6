import { Console } from "@woowacourse/mission-utils";
import UserInput from '../view/UserInput.js';

class RacingcarController{
    constructor(){
        
    }

    async racingCarStart(){
        const RACING_CAR_NAME = await this.userInput.inputRacingcarName();
    }
}

export default RacingcarController