import Controller from './Controller';
import OutputView from '../views/OutputView';


class GameStart {
    #VEHICLE_NAME
    #PLAY_TIME
    #MOVE_PROCEDURE
    #champion

    constructor() {
        this.OUT_VIEW = new OutputView();
        this.CONTROL = new Controller();
        this.#champion = [];
    }
    
    async startGame() {
        this.OUT_VIEW.printInputVehicleMsg();
        this.#VEHICLE_NAME = await this.CONTROL.inputVehicleName();
        this.OUT_VIEW.printVehicleName(this.#VEHICLE_NAME);
        await this.#getPlayTimes();
    }

    async #getPlayTimes() {
        this.OUT_VIEW.printInputPlayTimeMsg();
        const PLAY_TIME = await this.CONTROL.inputPlayTimes();
        this.OUT_VIEW.printGamePlayTime(PLAY_TIME);
        this.#moveVehicle();
    }

    #moveVehicle() {
        this.CONTROL.makeVehicleObject();
        this.#PLAY_TIME = this.CONTROL.getPlayTimeNumber();
        for (let idx = 0; idx < this.#PLAY_TIME; idx++) {
            this.#MOVE_PROCEDURE = this.CONTROL.setVehicleObjectNumber();
            this.OUT_VIEW.printMoveProcedure(this.#VEHICLE_NAME,this.#MOVE_PROCEDURE);
        }
        this.#gameResult();
    }

    #gameResult() {
        this.#champion = this.CONTROL.findChampions(this.#MOVE_PROCEDURE,this.#champion);
        this.OUT_VIEW.printResult(this.#champion);
    }
}

export default GameStart;