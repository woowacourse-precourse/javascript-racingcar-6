import { MissionUtils } from "@woowacourse/mission-utils";


class UserInput {
    async inputCarNames() {
        const StringCarNames = await MissionUtils.Console.readLineAsync('경주할 자동차 이름을 입력하세요. (이름은 쉼표(,) 기준으로 구분) \n');
        const CarNames = StringCarNames.split(',');
        if (CarNames.at(-1) === '') {
            CarNames.pop();
        }
        this.ValidateCarName(CarNames);
    }
    ValidateCarName(CarNames) {
        for(let i=0;i<CarNames.length;i++){
            if(CarNames[i].length <= 5) { }
            else {
                throw new Error('[Error] 자동차 이름은 5글자 이하만 가능합니다.');
            }
        } 
    }

    async inputTryNum() {
        const TryNumber = await MissionUtils.Console.readLineAsync('시도할 횟수는 몇 회인가요? \n');
        console.log(typeof(TryNumber));
        this.ValidateTryNum(TryNumber);
    }
    ValidateTryNum(TryNumber) {
        if (Number.isInteger(Number(TryNumber))) { }
        else {
            throw new Error('[Error] 시도 횟수는 정수만 입력 가능합니다.');
        }
    }

}
export default UserInput;