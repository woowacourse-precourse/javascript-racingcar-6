import {MissionUtils} from "@woowacourse/mission-utils";
import App from "../src/App.js";
import Result from "../src/view/carRaceView.js";

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
    const logSpy = jest.spyOn(MissionUtils.Console, 'print');
    logSpy.mockClear();
    return logSpy;
};

describe('레이스당 결과 ', () => {
    test('숫자가 3초과면 '-' 한칸 출력', async () => {
        mockRandoms([1, 2, 4]);
        mockQuestions(['doh,dohy,doh1', '2']);
        const logSpy = getLogSpy();
        const app = new App();
        await app.play();

        expect(logSpy).toHaveBeenCalledWith('doh : -');
    });
});
describe('최종결과 출력 테스트', () => {
    test('제일 멀리간 자동차가 승리한다.', async () => {
        const logSpy = getLogSpy();

        const result = new Result();
        result.FinalResult([
            { name: 'doh', position: 3 },
            { name: 'dohy', position: 1 },
            { name: 'doh1', position: 2 },
        ]);

        expect(logSpy).toHaveBeenCalledWith('결과 : Kim');
    });

    test('제일 멀리간 자동차가 공동 승리한다.', async () => {
        const logSpy = getLogSpy();

        const result = new Result();
        result.FinalResult([
            { name: 'doh', position: 2 },
            { name: 'dohy', position: 2 },
            { name: 'doh1', position: 1 },
        ]);

        expect(logSpy).toHaveBeenCalledWith('결과 : doh, dohy');
    });
});