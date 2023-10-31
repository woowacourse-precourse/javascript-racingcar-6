import { Console } from "@woowacourse/mission-utils";
import { printWinner } from "../src/GameFactors";


const getLogSpy = () => {
    const logSpy = jest.spyOn(Console, "print");
    logSpy.mockClear();
    return logSpy;
};

describe('최종 우승자 출력', () => {
    test('최종 우승자 출력', () => {
        const logSpy = getLogSpy();
        const maxRate = 2;
        const racingCars = new Map ([["pobi", 2], ['loopy', 1]]);
        //when
        printWinner(maxRate, racingCars);
        //then
        expect(logSpy).toHaveBeenCalledWith("최종 우승자 : pobi");
    });    
});
