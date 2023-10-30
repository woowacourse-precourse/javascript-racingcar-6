import { Console } from "@woowacourse/mission-utils";
import { EXEPTION } from "./Exception";

class GetInput {
    carName = [];
    GET_CAR_NAME_MESSAGE = '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n';
    GET_NUMBER_NAME_MESSAGE = '시도할 횟수는 몇 회인가요?\n';

    async getCarNameInput() {
        try{
            const USER_INPUT = await Console.readLineAsync(this.GET_CAR_NAME_MESSAGE);
            const USER_INPUT_SPLIT = USER_INPUT.split(',');
            if(USER_INPUT_SPLIT == '' || USER_INPUT_SPLIT[USER_INPUT_SPLIT.length-1] == '') {
                throw new Error(EXEPTION.CAR_NAME_COUNT_ERROR);
            }
            else if(USER_INPUT_SPLIT.some(name => name.length >= 5)) {
                throw new Error(EXEPTION.CAR_NAME_LENGTH_ERROR);
            }
            else if(USER_INPUT_SPLIT.length != [...new Set(USER_INPUT_SPLIT)].length) {
                throw new Error(EXEPTION.CAR_NAME_LENGTH_ERROR);
            }
            else{
                this.carName = USER_INPUT_SPLIT;
            }
            return this.carName;
        }catch(error){
            throw new Error(error.message);
        }
    }

    async getNumberInput() {
        try{
            const USER_NUMBER_INPUT = await Console.readLineAsync(this.GET_NUMBER_NAME_MESSAGE);
            console.log("");
            if(!Number(USER_NUMBER_INPUT)) {
                throw new Error(EXEPTION.INVALID_TYPE_TRY_ERROR);
            }
            else if(USER_NUMBER_INPUT == 0) {
                throw new Error(EXEPTION.TRY_COUNT_ERROR);
            }
            return USER_NUMBER_INPUT;
        }catch(error){
            throw new Error(error.message);
        }
    }
}

export default GetInput;