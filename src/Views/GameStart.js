import Controller from '../controller/Controller';
import OutputView from '../views/OutputView';
import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MSG } from '../models/OutputMsg';
import { CONSTANTS } from '../models/Constants';


class GameStart {
    constructor() {
        this.OUT_VIEW = new OutputView();
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
        Console.print(CONSTANTS.gamePlayTimes);
        this.#moveVehicle();
    }

    #moveVehicle() {
        this.CONTROL.makeVehicleObject();
        for (let idx = 0; idx < CONSTANTS.gamePlayTimes; idx++) {
            this.CONTROL.setVehicleObjectNumber();
            this.OUT_VIEW.printMoveProcedure();
        }
        this.#printResult();
    }

    #printResult() {
        this.CONTROL.findChampions();
        Console.print(`${OUTPUT_MSG.WINNER_IS} ${CONSTANTS.champion.join(', ')}`);
    }
}

export default GameStart;