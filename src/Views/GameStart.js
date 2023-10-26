import Controller from '../Controller/Controller';
import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MSG } from '../Models/OutputMsg';
import { CONSTANTS } from '../Models/Constants';


class GameStart {
    constructor() {
        this.CON = new Controller();
    }
    
    async startGame() {
        Console.print(OUTPUT_MSG.INPUT_VEHICLE_NAME);
        await this.CON.inputVehicleName();
        Console.print(CONSTANTS.vehicleNameList.join(','));
        await this.#getPlayTimes();
    }

    async #getPlayTimes() {
        Console.print(OUTPUT_MSG.INPUT_PLAY_TIME);
        await this.CON.inputPlayTimes();
    }

}

module.exports = GameStart;