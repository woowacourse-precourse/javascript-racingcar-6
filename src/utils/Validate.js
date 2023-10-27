import { ERROR_MSG } from '../constants/OutputMsg';

class Validate {
    vehicleNameValidate(vehicleName) {
        if (vehicleName.some(name => name.length > 5)) throw new Error(ERROR_MSG.USER_NAME_ERROR);
    }

    playTimeValidate(playTime) {
        if (!Number.isSafeInteger(playTime)) throw new Error(ERROR_MSG.PLAY_TIME_ERROR);
    }

    moveNumberValidate(moveNumber) {
        return (moveNumber >= 4) ? true : false;
    }

}

export default Validate;