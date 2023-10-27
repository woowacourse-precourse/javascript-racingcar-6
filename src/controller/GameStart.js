import Controller from './Controller';
import OutputView from '../views/OutputView';
import { CONSTANTS } from '../constants/Constants';


class GameStart {
    constructor() {
        this.OUT_VIEW = new OutputView();
        this.CONTROL = new Controller();
    }
    
    async startGame() {
        this.OUT_VIEW.printInputVehicleMsg();
        await this.CONTROL.inputVehicleName();
        this.OUT_VIEW.printVehicleName();
        await this.#getPlayTimes();
    }

    async #getPlayTimes() {
        this.OUT_VIEW.printInputPlayTimeMsg();
        await this.CONTROL.inputPlayTimes();
        this.OUT_VIEW.printGamePlayTime();
        this.#moveVehicle();
    }

    #moveVehicle() {
        this.CONTROL.makeVehicleObject();
        for (let idx = 0; idx < CONSTANTS.gamePlayTimes; idx++) {
            this.CONTROL.setVehicleObjectNumber();
            this.OUT_VIEW.printMoveProcedure();
        }
        this.#gameResult();
    }

    #gameResult() {
        this.CONTROL.findChampions();
        this.OUT_VIEW.printResult();
    }
}

export default GameStart;