import {MissionUtils} from "@woowacourse/mission-utils";
import App from "../src/App.js";
import Result from "../src/view/carRaceView.js";
import Car from "../src/model/carModel.js";

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

describe('레이스별 결과 ', () => {
    test('전진했을때 값이 1증가.', () => {
        const car = new Car('CAR1');
        car.move();
        expect(car.moves).toBe(1);
    });
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
describe('자동차 동작 및 이름 생성 테스트', () => {
    test('5자 이하 이름은 자동차가 생성되는지 확인', () => {
        const car = new Car('TestCar');
        expect(car.name).toBe('TestCar');
    });


});