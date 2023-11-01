import { MissionUtils } from "@woowacourse/mission-utils";
import gameInterface from "../src/components/ui/game_interface";

const mockQuestions = (inputs) => {
    MissionUtils.Console.readLineAsync = jest.fn();
  
    MissionUtils.Console.readLineAsync.mockImplementation(() => {
        const input = inputs.shift();
        return Promise.resolve(input);
    });
};
  
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
  
describe("자동차 이동에 관한 테스트", () => {
    test("전진-정지1", async () => {
        //given
        const MOVING_FORWARD = 4;
        const STOP = 3;
        const inputs = ["pobi,woni", "1"];
        const outputs = ["pobi : -", "woni : "];
        const randoms = [MOVING_FORWARD, STOP];
        const logSpy = getLogSpy();
    
        mockQuestions(inputs);
        mockRandoms([...randoms]);

        //when
        await gameInterface();
        
        //then
        outputs.forEach((output) => {
            expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
        });
    });

    test("전진-정지2", async () => {
        //given
        const MOVING_FORWARD = 4;
        const STOP = 3;
        const inputs = ["pobi,woni", "3"];
        const outputs = ["pobi : ---", "woni : "];
        const randoms = [MOVING_FORWARD, STOP, MOVING_FORWARD, STOP, MOVING_FORWARD, STOP];
        const logSpy = getLogSpy();
    
        mockQuestions(inputs);
        mockRandoms([...randoms]);

        //when
        await gameInterface();

        //then
        outputs.forEach((output) => {
            expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
        });
    });

    test("전진-정지3", async () => {
        //given
        const MOVING_FORWARD = 4;
        const STOP = 3;
        const inputs = ["pobi,woni,jun", "3"];
        const outputs = ["pobi : ---", "woni : -", "jun : "];
        const randoms = [MOVING_FORWARD, STOP, STOP, MOVING_FORWARD, STOP, STOP, MOVING_FORWARD, MOVING_FORWARD, STOP];
        const logSpy = getLogSpy();
    
        mockQuestions(inputs);
        mockRandoms([...randoms]);

        //when
        await gameInterface();

        //then
        outputs.forEach((output) => {
            expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
        });
    });
});