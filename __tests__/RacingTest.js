import { MissionUtils } from "@woowacourse/mission-utils";
import { runByCount, runRace } from "../src/models/runRace";

const mockRandoms = (numbers) => {
    MissionUtils.Random.pickNumberInRange = jest.fn();
    numbers.reduce((acc, number) => {
      return acc.mockReturnValueOnce(number);
    }, MissionUtils.Random.pickNumberInRange);
};

const getLogSpy = () => {
    const logSpy = jest.spyOn(MissionUtils.Console, "print");
    logSpy.mockClear();
    return logSpy;
};

describe("게임 진행 테스트", () => {
    test("랜덤 수에 따른 진행 상태 확인 테스트, 입력한 시도 횟수와 상관 없이 한 라운드만 진행 테스트", () => {
        const CARS = {
            car1: '',
            car2: '',
            car3: '',
        };
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

    test("랜덤 수에 따른 진행 상태 확인 테스트, 입력한 시도 횟수에 따른 라운드 진행 테스트", () => {
        const logSpy = getLogSpy();
        const CARS = {
            car1: '',
            car2: '',
            car3: '',
        };
        const COUNT = 2;
        const RANDOM_NUM_1 = [4, 3, 5];
        const RANDOM_NUM_2 = [5, 2, 3];
    
        mockRandoms([...RANDOM_NUM_1, ...RANDOM_NUM_2]);
        runByCount(CARS, COUNT);
        
        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("실행 결과"));
        // 1라운드
        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("car1 : -"));
        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("car2 : "));
        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("car3 : -"));

        // 2라운드
        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("car1 : --"));
        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("car2 : "));
        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("car3 : -"));
    });
});
