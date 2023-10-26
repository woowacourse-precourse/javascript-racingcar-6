import Validate from '../utils/Validate';
import { Console,Random } from '@woowacourse/mission-utils';
import { OUTPUT_MSG } from '../models/OutputMsg';
import { CONSTANTS,MOVE_RANGE } from '../models/Constants';

class Controller {
    constructor() {
        this.VALIDATE = new Validate();
    }

    async inputVehicleName() {
        try {
            const VEHICLE_NAME = await Console.readLineAsync(OUTPUT_MSG.INPUT_VEHICLE_NAME);
            CONSTANTS.vehicleNameList = VEHICLE_NAME.split(',');
            this.VALIDATE.vehicleNameValidate(CONSTANTS.vehicleNameList);
        } catch (error) {
            throw error;
        }
    }

    async inputPlayTimes() {
        try {
            const PLAY_TIME = await Console.readLineAsync(OUTPUT_MSG.INPUT_PLAY_TIME);
            CONSTANTS.gamePlayTimes = Number(PLAY_TIME);
            this.VALIDATE.playTimeValidate(CONSTANTS.gamePlayTimes);
        } catch (error) {
            throw error;
        }
    }

    makeVehicleObject() {
        CONSTANTS.vehicleNameList.forEach((vehicleName) => {
            CONSTANTS.vehicleNameObject[vehicleName] = 0
            CONSTANTS.moveProcedure[vehicleName] = '';
        });
    }

    setVehicleObjectNumber() {
        CONSTANTS.vehicleNameList.forEach((vehicleName) => CONSTANTS.vehicleNameObject[vehicleName] = this.#getMoveNumber(vehicleName));
    }

    #getMoveNumber(vehicleName) {
        const moveNumber = Random.pickNumberInRange(MOVE_RANGE.FROM, MOVE_RANGE.TO);
        if (this.VALIDATE.moveNumberValidate(moveNumber)) {
            CONSTANTS.moveProcedure[vehicleName] += '-';
            return moveNumber;
        }
        return 0;
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