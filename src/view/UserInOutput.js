import { Console } from "@woowacourse/mission-utils";
import Validate from '../comm/validate.js';
import { MESSAGE } from '../comm/outputMessage.js';

class UserInOutput{

    #outRacingData;
    #outputWinnerData;

    constructor(racingCar){
        this.racingCar = racingCar;
        this.#outRacingData = '';
        this.#outputWinnerData = '';
        this.validate = new Validate();
    }

    async inputRacingcarName(){
        const RACING_CAR_NAME = await Console.readLineAsync(`${MESSAGE.RACING_CAR_INPUT}\n`);
        const VALIDATE_CAR_NAME = this.validate.racingCarInputValidate(RACING_CAR_NAME.split(','));
        return VALIDATE_CAR_NAME;
    }

    async inputRacingCount(){
        const RACING_COUNT = await Console.readLineAsync(`${MESSAGE.RACING_COUNT}\n`);
        const VALIDATE_RACING_COUNT = this.validate.racingCountInputValidate(RACING_COUNT);
        return VALIDATE_RACING_COUNT;
    }
    
    playGameResultOutputMsg(){
        Console.print(MESSAGE.RACING_PLAY);
    }

    outputRacingMessage = (reacingCarResult) => {
        reacingCarResult.reduce((acc, cur, idx) => {
            Console.print(cur);
        },  "");
        this.#outRacingData = '';
    }

    outputWinnerMessage = (name, winnerIndex) => {
        winnerIndex.forEach((data, index) => {
            if(index != 0){
                this.#outputWinnerData += ', '+name[data];    
            } else if(index == 0){
                this.#outputWinnerData += name[data];
            }
        });
        Console.print('최종 우승자 : '+this.#outputWinnerData);
    }

}

export default UserInOutput;