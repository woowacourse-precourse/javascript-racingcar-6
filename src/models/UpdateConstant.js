import Validate from '../utils/Validate';
import { MOVE_RANGE } from '../constants/Constants';
import { Random } from '@woowacourse/mission-utils';


class UpdateConstants {
    #vehicleNameList
    #gamePlayTimes
    #vehicleNameObject
    #moveProcedure
    
    constructor() {
        this.VALIDATE = new Validate();
        this.#vehicleNameList =  [];
        this.#gamePlayTimes = 0;
        this.#vehicleNameObject = {};
        this.#moveProcedure = {};
    }

    updateVehicleNameList(vehicleName) {
        this.#vehicleNameList = vehicleName.split(',');
        this.VALIDATE.vehicleNameValidate(this.#vehicleNameList);
        return this.#vehicleNameList
    }

    updateGamePlayTimes(playTime) {
        this.VALIDATE.playTimeRegaxValidate(playTime);
        this.#gamePlayTimes = Number(playTime);
        this.VALIDATE.playTimeValidate(this.#gamePlayTimes);
        return this.#gamePlayTimes;
    }

    updateObjectKeyValues() {
        this.#vehicleNameList.forEach((vehicleName) => {
            this.#vehicleNameObject[vehicleName] = 0;
            this.#moveProcedure[vehicleName] = '';
        });
    }

    getPlayTime() {
        return this.#gamePlayTimes;
    }

    updateVehicleObjectValue() {
        this.#vehicleNameList.forEach((vehicleName) => this.#vehicleNameObject[vehicleName] = this.#getMoveNumber(vehicleName));
        return this.#moveProcedure
    }

    #getMoveNumber(vehicleName) {
        const MOVE_NUMBER = Random.pickNumberInRange(MOVE_RANGE.FROM, MOVE_RANGE.TO);
        if (this.VALIDATE.moveNumberValidate(MOVE_NUMBER)) {
            this.#moveProcedure[vehicleName] += '-';
            return MOVE_NUMBER;
        }
        return 0;
    }

}

export default UpdateConstants;