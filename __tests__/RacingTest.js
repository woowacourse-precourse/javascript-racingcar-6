import { MissionUtils } from "@woowacourse/mission-utils";
import { runRace } from "../src/models/runRace";

const mockRandoms = (numbers) => {
    MissionUtils.Random.pickNumberInRange = jest.fn();
    numbers.reduce((acc, number) => {
      return acc.mockReturnValueOnce(number);
    }, MissionUtils.Random.pickNumberInRange);
};

describe("게임 진행 테스트", () => {
    test("랜덤 수에 따른 진행 상태 확인 테스트, 입력한 시도 횟수와 상관 없이 한 라운드만 진행 테스트", () => {
        const CARS = {
            car1: '',
            car2: '',
            car3: '',
        };
        const COUNT = 2;
        const RANDOM_NUM = [4, 3, 5];
        mockRandoms(RANDOM_NUM);
        const RESULT = {
            car1: '-',
            car2: '',
            car3: '-',
        };

        const expectResult = runRace(CARS);
        expect(expectResult).toEqual(RESULT);
    });
});