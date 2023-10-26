import Controller from '../controller/Controller';
import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MSG } from '../models/OutputMsg';
import { CONSTANTS } from '../models/Constants';


class GameStart {
    constructor() {
        this.CONTROL = new Controller();
    }
    
    async startGame() {
        Console.print(OUTPUT_MSG.INPUT_VEHICLE_NAME);
        await this.CONTROL.inputVehicleName();
        Console.print(CONSTANTS.vehicleNameList.join(','));
        await this.#getPlayTimes();
    }

    async #getPlayTimes() {
        Console.print(OUTPUT_MSG.INPUT_PLAY_TIME);
        await this.CONTROL.inputPlayTimes();
    }

}

export default GameStart;