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
        const maxRate = 5;
        const racingCars = new Map ([["pobi", 5], ['loopy', 3]]);
        //when
        printWinner(maxRate, racingCars);
        //then
        expect(logSpy).toHaveBeenCalledWith("최종 우승자 : pobi");
    });    
});
