import { ERROR_MSG } from '../models/OutputMsg';

class Validate {
    vehicleNameValidate(vehicleName) {
        if (vehicleName.some(name => name.length > 5)) throw new Error(ERROR_MSG.USER_NAME_ERROR);
    }

    playTimeValidate(playTime) {
        if (!Number.isSafeInteger(playTime)) throw new Error(ERROR_MSG.PLAY_TIME_ERROR);
    }

}

export default Validate;