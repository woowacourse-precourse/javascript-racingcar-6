import { ERROR_MESSAGE } from "../comm/outputMessage.js";

class Validate{
    racingCarInputValidate = (carName) => {
        return carName.reduce((arr, cur, idx) => {
            if(cur.length > 5){
                throw Error(`${ERROR_MESSAGE.INPUT_LENGTH_ERROR}`);
            } else if(cur.length === 0 || cur.trim() === ''){
                throw Error(`${ERROR_MESSAGE.INPUT_BLANK_ERROR}`);
            }
            return carName;
        }, "");
    }
    racingCountInputValidate = (racingCount) => {
        if(isNaN(racingCount)){
            throw Error(`${ERROR_MESSAGE.INPUT_NUMBER_ERROR}`);
        } else if(racingCount === 0 || racingCount.trim() === ''){
            throw Error(`${ERROR_MESSAGE.INPUT_BLANK_ERROR}`);
        }
        return racingCount;
    }
}

export default Validate