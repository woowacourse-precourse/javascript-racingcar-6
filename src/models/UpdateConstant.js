import Validate from '../utils/Validate';
import { CONSTANTS, MOVE_RANGE } from '../constants/Constants';
import { Random } from '@woowacourse/mission-utils';


class UpdateConstants {
    constructor() {
        this.VALIDATE = new Validate();
    }
    updateVehicleNameList(vehicleName) {
        CONSTANTS.vehicleNameList = vehicleName.split(',');
    }

    updateGamePlayTimes(playTime) {
        CONSTANTS.gamePlayTimes = Number(playTime);
    }

    updateObjectKeyValues() {
        CONSTANTS.vehicleNameList.forEach((vehicleName) => {
            CONSTANTS.vehicleNameObject[vehicleName] = 0
            CONSTANTS.moveProcedure[vehicleName] = '';
        });
    }

    updateVehicleObjectValue() {
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

}

export default UpdateConstants;