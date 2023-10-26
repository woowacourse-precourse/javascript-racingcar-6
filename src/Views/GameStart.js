import Controller from '../Controller/Controller';
import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MSG } from '../Models/OutputMsg';

class GameStart {
    constructor() {
        this.CON = new Controller();
    }
    
    async startGame() {
        Console.print(OUTPUT_MSG.INPUT_VEHICLE_NAME);
        await this.CON.inputVehicleName();
    }

}

module.exports = GameStart;