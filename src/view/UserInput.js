import { Console } from "@woowacourse/mission-utils";
import { Comm, MESSAGE } from '../model/Comm.js';

class UserInput{
    constructor(){
        this.comm = new Comm();
    }

    async inputRacingcarName(){
        const RACING_CAR_NAME = await Console.readLineAsync(`${MESSAGE.RACING_CAR_INPUT}\n`);
        const VALIDATE_CAR_NAME = this.comm.racingCarInputValutate(RACING_CAR_NAME.split(','));
        return VALIDATE_CAR_NAME;
    }
}
export default UserInput;