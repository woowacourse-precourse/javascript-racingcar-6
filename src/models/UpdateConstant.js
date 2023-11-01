import Validate from '../utils/Validate';
import { MOVE_RANGE, VEHICLE_MOVE } from '../constants/Constants';
import { Random } from '@woowacourse/mission-utils';


class UpdateConstants {
    #vehicleNameList;
    #gamePlayTimes;
    #moveProcedure;
    
    constructor() {
        this.VALIDATE = new Validate();
        this.#vehicleNameList = [];
        this.#gamePlayTimes = 0;
        this.#moveProcedure = {};
    }

    vehicleNameList(vehicleName) {
        this.#vehicleNameList = vehicleName.split(',');
        this.VALIDATE.vehicleName(this.#vehicleNameList);
        return this.#vehicleNameList;
    }

    gamePlayTimes(playTime) {
        this.VALIDATE.playTimeRegax(playTime);
        this.#gamePlayTimes = Number(playTime);
        this.VALIDATE.playTime(this.#gamePlayTimes);
        return this.#gamePlayTimes;
    }

    objectKeyValues() {
        this.#vehicleNameList.forEach((vehicleName) => {
            this.#moveProcedure[vehicleName] = '';
        });
    }

    getPlayTime() {
        return this.#gamePlayTimes;
    }

    vehicleObjectValue() {
        this.#vehicleNameList.forEach((vehicleName) => this.#moveProcedure[vehicleName] += this.#getMoveNumber());
        return this.#moveProcedure;
    }

    #getMoveNumber() {
        const MOVE_NUMBER = Random.pickNumberInRange(MOVE_RANGE.from, MOVE_RANGE.to);
        if (this.VALIDATE.moveNumber(MOVE_NUMBER)) {
            return VEHICLE_MOVE.move;
        }
        return VEHICLE_MOVE.stop;
    }

}

export default UpdateConstants;