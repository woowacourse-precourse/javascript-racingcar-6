import { MissionUtils } from "@woowacourse/mission-utils";

class UserInput {
    async inputCarNames() {
        const StringCarNames = await MissionUtils.Console.readLineAsync('경주할 자동차 이름을 입력하세요. (이름은 쉼표(,) 기준으로 구분) \n');
        const CarNames = StringCarNames.split(',');
        // input이 "pobi,jun," 인 경우 쉼표 뒤의 '' 삭제 
        if (CarNames.at(-1) === '') {
            CarNames.pop();
        }
        this.ValidateCarName(CarNames);
        return CarNames;
    }
    ValidateCarName(CarNames) {
        CarNames.forEach(el => {
            if (el.length > 5) {
                throw new Error('[ERROR] 유저의 이름은 5자 이하로 입력하세요.');
            }
        })
    }

    async inputTryNum() {
        const TryString = await MissionUtils.Console.readLineAsync('시도할 횟수는 몇 회인가요? \n');
        const TryNumber = Number(TryString);
        this.ValidateTryNum(TryNumber);
        return TryNumber;
    }
    ValidateTryNum(TryNumber) {
        if (!Number.isInteger(TryNumber)) {
            throw new Error('[Error] 시도 횟수는 정수만 입력 가능합니다.');
        }
    }
}
export default UserInput;