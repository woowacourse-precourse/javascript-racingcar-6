import Validate from '../utils/Validate';
import UpdateConstants from '../models/UpdateConstant';
import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MSG } from '../constants/OutputMsg';
import { CONSTANTS } from '../constants/Constants';

class Controller {
    constructor() {
        this.VALIDATE = new Validate();
        this.UPDATE_MODEL = new UpdateConstants();
    }

    async inputVehicleName() {
        try {
            const VEHICLE_NAME = await Console.readLineAsync(OUTPUT_MSG.INPUT_VEHICLE_NAME);
            this.UPDATE_MODEL.updateVehicleNameList(VEHICLE_NAME);
            this.VALIDATE.vehicleNameValidate(CONSTANTS.vehicleNameList);
        } catch (error) {
            throw error;
        }
    }

    async inputPlayTimes() {
        try {
            const PLAY_TIME = await Console.readLineAsync(OUTPUT_MSG.INPUT_PLAY_TIME);
            this.UPDATE_MODEL.updateGamePlayTimes(PLAY_TIME);
            this.VALIDATE.playTimeValidate(CONSTANTS.gamePlayTimes);
        } catch (error) {
            throw error;
        }
    }

    makeVehicleObject() {
        this.UPDATE_MODEL.updateObjectKeyValues()
    }

    setVehicleObjectNumber() {
        this.UPDATE_MODEL.updateVehicleObjectValue();
    }

    findChampions() {
        const procedureLength = Object.values(CONSTANTS.moveProcedure).map((move) => move.length);
        const maxValue = Math.max(...procedureLength);
        Object.entries(CONSTANTS.moveProcedure).forEach((vehicle) => {
            if (vehicle[1].length === maxValue) CONSTANTS.champion.push(vehicle[0]);
        })
    }

}

export default Controller;