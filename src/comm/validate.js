import { MESSAGE, ERROR_MESSAGE } from "../constant/OutputMessage.js";

class Validate{
    racingCarInputValidate = (carName) => {
        return carName.reduce((arr, cur, idx) => {
            if(cur.length > 5){
                throw Error(`${ERROR_MESSAGE.INPUT_LENGTH_ERROR}`);
            }
            return carName;
        }, "");
    }
    racingCountInputValidate = (racingCount) => {
        if(isNaN(racingCount)){
            throw Error(`${ERROR_MESSAGE.INPUT_NUMBER_ERROR}`);
        }
        return racingCount
    }
}

export default Validate