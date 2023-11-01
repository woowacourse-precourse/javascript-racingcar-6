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

    async getTryCount() {
        const inputTryCount = await Console.readLineAsync(
            "시도할 횟수는 몇 회 인가요? \n"
        );
        const tryCount = Number(inputTryCount);
        if (tryCount < 1 || tryCount > 50) {
            throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
        }
        return tryCount;
    }
}

export default App;
