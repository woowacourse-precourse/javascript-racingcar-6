import { ERROR_MSG } from '../constants/OutputMsg';

class Validate {
    #REGAX
    
    constructor() {
        this.#REGAX = /\s|[!@#$%^&*(),.?":{}|<>]/;
    }

    vehicleNameValidate(vehicleName) {
        if (vehicleName.some(name => this.#REGAX.test(name))) throw new Error(ERROR_MSG.USER_NAME_REGAX_ERROR);
        if (vehicleName.some(name => name.length > 5 || name.trim().length === 0)) throw new Error(ERROR_MSG.USER_NAME_LENGTH_ERROR);
    }

    playTimeRegaxValidate(playTime) {
        if (playTime.length === 0) throw new Error(ERROR_MSG.PLAY_TIME_NOT_NULL_ERROR);
        if (this.#REGAX.test(playTime)) throw new Error(ERROR_MSG.PLAY_TIME_REGAX_ERROR);
    }

    playTimeValidate(playTime) {
        if (!Number.isSafeInteger(playTime)) throw new Error(ERROR_MSG.PLAY_TIME_ERROR);
    }

    moveNumberValidate(moveNumber) {
        return (moveNumber >= 4) ? true : false;
    }

}

export default Validate;