import { Console } from "@woowacourse/mission-utils";

class UserInput {
    async getCarNames() {
        const carNames = await Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n");

        return carNames.split(",");

    }

    async getMoveCount() {
        const moveCount = await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");

        return moveCount;
    }
}

export default UserInput;
