import { MissionUtils } from "@woowacourse/mission-utils";


class UserInput {
    async inputCarNames() {
        const StringCarNames = await MissionUtils.Console.readLineAsync('경주할 자동차 이름을 입력하세요. (이름은 쉼표(,) 기준으로 구분) \n');
        const CarNames = StringCarNames.split(',');
        this.ValidateUserInput(CarNames);
    }

    ValidateUserInput(CarNames) {
        for(let i=0;i<CarNames.length;i++){
            if(CarNames[i].length <= 5) { }
            else {
                throw new Error('[Error] 자동차 이름은 5글자 이하만 가능합니다.');
            }
        } 
    }
}
export default UserInput;