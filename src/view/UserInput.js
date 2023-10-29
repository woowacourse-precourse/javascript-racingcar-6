import { Console } from "@woowacourse/mission-utils";
import { Comm } from '../model/Comm.js';
import { MESSAGE } from '../constant/OutputMessage.js';

class UserInput{

    constructor(racingCar){
        this.racingCar = racingCar;
        this.comm = new Comm();
    }

    async inputRacingcarName(){
        const RACING_CAR_NAME = await Console.readLineAsync(`${MESSAGE.RACING_CAR_INPUT}\n`);
        const VALIDATE_CAR_NAME = this.comm.racingCarInputValutate(RACING_CAR_NAME.split(','));
        return VALIDATE_CAR_NAME;
    }

    async inputRacingCount(){
        return await Console.readLineAsync(`${MESSAGE.RACING_COUNT}\n`);
    }

}

export default UserInput;