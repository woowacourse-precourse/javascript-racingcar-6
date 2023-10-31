import { Console, Random } from "@woowacourse/mission-utils";
import Game from "../src/Game.js";

const getLogSpy = () => {
    const logSpy = jest.spyOn(Console, "print");
    logSpy.mockClear();
    return logSpy;
};  

const mockRandoms = (numbers) => {
    Random.pickNumberInRange = jest.fn();
    numbers.reduce((acc, number) => {
      return acc.mockReturnValueOnce(number);
    }, Random.pickNumberInRange);
};

describe('실행 결과 출력', () => {
    test('전체 실행 결과', () => {
        //given
        const logSpy = getLogSpy();
        const MOVING_FORWARD = 4;
        const STOP = 3;
        const carNames = ['pobi', 'loopy', 'crong'];
        const attempts = 1;
        const randoms = [MOVING_FORWARD, MOVING_FORWARD, STOP];
        const outputs = ['실행 결과', "pobi : -", 'loopy : -', '최종 우승자 : pobi, loopy'];
        const racingCars = new Map ();

        mockRandoms([...randoms]);

        //when
        Game(carNames, attempts, racingCars);
        //then
        outputs.forEach((output) => {
            expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output))
        });
    });    
});
