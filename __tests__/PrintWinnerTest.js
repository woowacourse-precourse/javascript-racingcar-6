import { MissionUtils } from "@woowacourse/mission-utils";
import printWinner from "../src/components/ui/print_winner";

const getLogSpy = () => {
    const logSpy = jest.spyOn(MissionUtils.Console, "print");
    logSpy.mockClear();
    return logSpy;
};

describe("최종 우승자 출력에 대한 테스트", () => {
    test("우승자가 한명 일 경우", async () => {
        // given
        const inputs = {'car1' : 1 , 'car2' : 4, 'car3' : 5, 'car4' : 4};
        const output = '최종 우승자 : car3';
        const logSpy = getLogSpy();

        // when
        printWinner(inputs);

        // then
        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });

    test("우승자가 여러명 일 경우", async () => {
        // given
        const inputs = {'car1' : 1 , 'car2' : 5, 'car3' : 5, 'car4' : 4, 'car5' : 5};
        const output = '최종 우승자 : car2, car3, car5';
        const logSpy = getLogSpy();

        // when
        printWinner(inputs);

        // then
        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
});
