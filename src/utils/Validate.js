import { ERROR_MSG } from '../constants/OutputMsg';
import { CONSTANTS } from '../constants/Constants';

class Validate {
    #NAME_REGAX;
    #PLAY_TIME_REGAX;
    
    constructor() {
        this.#NAME_REGAX = /\s|[!@#$%^&*(),.?":{}|<>]|\d/;
        this.#PLAY_TIME_REGAX = /\s|[!@#$%^&*(),.?":{}|<>]/;
    }

    vehicleNameValidate(vehicleName) {
        const NAME_DUPLICATION = new Set(vehicleName).size;
        if (vehicleName.length !== NAME_DUPLICATION) throw new Error(ERROR_MSG.NAME_DUPLICATION_ERROR);
        if (vehicleName.some(name => this.#NAME_REGAX.test(name))) throw new Error(ERROR_MSG.USER_NAME_REGAX_ERROR);
        if (vehicleName.some(name => name.length > CONSTANTS.maxVehicleName || name.trim().length === 0)) throw new Error(ERROR_MSG.USER_NAME_LENGTH_ERROR);
    }

    playTimeRegaxValidate(playTime) {
        if (playTime.length === 0) throw new Error(ERROR_MSG.PLAY_TIME_NOT_NULL_ERROR);
        if (this.#PLAY_TIME_REGAX.test(playTime)) throw new Error(ERROR_MSG.PLAY_TIME_REGAX_ERROR);
    }

    playTimeValidate(playTime) {
        if (Number(playTime) <= 0) throw new Error(ERROR_MSG.PLAY_TIME_NOT_ZERO_ERROR);
        if (!Number.isSafeInteger(playTime)) throw new Error(ERROR_MSG.PLAY_TIME_ERROR);
    }

    moveNumberValidate(moveNumber) {
        return (moveNumber >= CONSTANTS.vehicleCanMove) ? true : false;
    }

}

export default Validate;