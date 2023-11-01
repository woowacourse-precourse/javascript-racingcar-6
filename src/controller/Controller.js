import UpdateConstants from '../models/UpdateConstant';
import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MSG } from '../constants/OutputMsg';

class Controller {
    constructor() {
        this.UPDATE_MODEL = new UpdateConstants();
    }

    async inputVehicleName() {
        try {
            const VEHICLE_NAME = await Console.readLineAsync(OUTPUT_MSG.INPUT_VEHICLE_NAME);
            return this.UPDATE_MODEL.vehicleNameList(VEHICLE_NAME);
        } catch (error) {
            throw error;
        }
    }

    async inputPlayTimes() {
        try {
            const PLAY_TIME = await Console.readLineAsync(OUTPUT_MSG.INPUT_PLAY_TIME);
            return this.UPDATE_MODEL.gamePlayTimes(PLAY_TIME);
        } catch (error) {
            throw error;
        }
    }

    makeVehicleObject() {
        this.UPDATE_MODEL.objectKeyValues();
    }

    getPlayTimeNumber() {
        return this.UPDATE_MODEL.getPlayTime();
    }

    setVehicleObjectNumber() {
        return this.UPDATE_MODEL.vehicleObjectValue();
    }

    findChampions(moveProcedure,champion) {
        const PROCEDURE_LENGTH = Object.values(moveProcedure).map((move) => move.length);
        const MAX_VALUE = Math.max(...PROCEDURE_LENGTH);
        Object.entries(moveProcedure).forEach((vehicle) => {
            if (vehicle[1].length === MAX_VALUE) champion.push(vehicle[0]);
        });
        return champion;
    }

}

export default Controller;