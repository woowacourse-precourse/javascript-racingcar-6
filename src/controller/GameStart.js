import Controller from './Controller';
import OutputView from '../views/OutputView';


class GameStart {
    #VEHICLE_NAME;
    #PLAY_TIME;
    #MOVE_PROCEDURE;
    #champion;

    constructor() {
        this.OUT_VIEW = new OutputView();
        this.CONTROL = new Controller();
        this.#champion = [];
    }
    
    async startGame() {
        this.OUT_VIEW.inputVehicleMsg();
        this.#VEHICLE_NAME = await this.CONTROL.inputVehicleName();
        this.OUT_VIEW.vehicleName(this.#VEHICLE_NAME);
        await this.#getPlayTimes();
    }

    async #getPlayTimes() {
        this.OUT_VIEW.inputPlayTimeMsg();
        this.#PLAY_TIME = await this.CONTROL.inputPlayTimes();
        this.OUT_VIEW.gamePlayTime(this.#PLAY_TIME);
        this.#moveVehicle();
    }

    #moveVehicle() {
        this.CONTROL.makeVehicleObject();
        for (let idx = 0; idx < this.#PLAY_TIME; idx++) {
            this.#MOVE_PROCEDURE = this.CONTROL.setVehicleObjectNumber();
            this.OUT_VIEW.moveProcedure(this.#VEHICLE_NAME,this.#MOVE_PROCEDURE);
        }
        this.#gameResult();
    }

    #gameResult() {
        this.#champion = this.CONTROL.findChampions(this.#MOVE_PROCEDURE,this.#champion);
        this.OUT_VIEW.result(this.#champion);
    }
}

export default GameStart;