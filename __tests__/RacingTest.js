import { MissionUtils } from "@woowacourse/mission-utils";
import { runRace } from "../src/models/RunRace";
import { runByCount } from "../src/controllers/GameController";

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
    test("랜덤 수를 생성하고 0~3의 수가 나오면 전진하지 않고 4~9의 수가 나오면 전진하며 객체의 value값에 '-'를 추가한다.", () => {
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

    test("사용자가 입력한 시도횟수만큼 랜덤수를 돌리고, 그에 해당하는 자동차의 전진상태를 매 라운드마다 출력한다.", () => {
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
