import { MissionUtils, Console } from "@woowacourse/mission-utils";
class App {
    async play() {
        this.getCarNames();
    }

    async getCarNames() {
        const inputCarNames = await Console.readLineAsync(
            "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분) \n"
        );
        const carNames = inputString.split(",").map(String);
        for (const carName of carNames) {
            if (carName.length < 1 || carName.length > 5) {
                throw new Error("[ERROR] 이름이 잘못된 형식입니다.");
            }
        }
        return carNames;
    }
}

export default App;
