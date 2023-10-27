import { Console } from "@woowacourse/mission-utils";

class GetInput {
    CAR_NAME = [];
    GET_CAR_NAME_MESSAGE = '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n';
    GET_NUMBER_NAME_MESSAGE = '시도할 횟수는 몇 회인가요?\n';

    async GetCarNameInput() {
        try{
            const USER_INPUT = await Console.readLineAsync(this.GET_NUMBER_NAME_MESSAGE);
            const USER_INPUT_SPLIT = USER_INPUT.split(',');
            if(USER_INPUT_SPLIT == '' || USER_INPUT_SPLIT[USER_INPUT_SPLIT.length-1] == '') {
                throw new Error("[ERROR] 자동차의 이름을 2개 이상 입력해주세요.");
            }
            else if(USER_INPUT_SPLIT.some(name => name.length >= 5)) {
                throw new Error("[ERROR] 자동차의 이름을 4자 이하로 정해주세요.");
            }
            else if(USER_INPUT_SPLIT.length != [...new Set(USER_INPUT_SPLIT)].length) {
                throw new Error("[ERROR] 자동차의 이름은 한 번씩만 사용할 수 있습니다.");
            }
            else{
                this.CAR_NAME = USER_INPUT_SPLIT;
            }
            return this.CAR_NAME;
        }catch(error){
            throw new Error(error.message);
        }
    }

    async GetNumberInput() {
        try{
            const USER_NUMBER_INPUT = await Console.readLineAsync(this.GET_NUMBER_NAME_MESSAGE);
            console.log("");
            if(!Number(USER_NUMBER_INPUT)) {
                throw new Error("[ERROR] 시도할 횟수를 숫자로 입력해주세요.");
            }
            else if(USER_NUMBER_INPUT == 0) {
                throw new Error("[ERROR] 시도할 횟수를 1회 이상 입력해주세요.");
            }
            return USER_NUMBER_INPUT;
        }catch(error){
            throw new Error(error.message);
        }
    }
}

export default GetInput;