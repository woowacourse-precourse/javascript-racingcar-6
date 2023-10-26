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
        });
    }

    getMoveNumber() {
        const moveNumber = Random.pickNumberInRange(MOVE_RANGE.FROM, MOVE_RANGE.TO);
        if (this.VALIDATE.moveNumberValidate(moveNumber)) return moveNumber;
        return 0;
    }

}

export default Controller;