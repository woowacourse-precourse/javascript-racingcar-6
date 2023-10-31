import { MissionUtils } from "@woowacourse/mission-utils";

class UserInput {

    // 자동차 이름 입력 메소드
    async getCarNames() {
        
        const carNames = await MissionUtils.Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)");
        return carNames.split(",");
    }
}

export default UserInput;
