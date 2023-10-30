import App from '../src/App.js';
import { MissionUtils } from '@woowacourse/mission-utils';

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

describe('기능 구현 테스트', () => {
    const app = new App();

    test('이름을 입력받는다.', async () => {
        const inputs = ['yoo, vin'];
        mockQuestions(inputs);
        const result = app.getUserInput();
        expect(result).toEqual(['yoo', 'vin']);
    });

    test('입력받은 이름이 5글자가 넘으면 error 발생', async () => {
        const inputs = ['yoovin, vin'];
        mockQuestions(inputs);
        const result = app.getUserInput();
        await expect(result).rejects.toThrow('[ERROR]');
    });

    test('입력받은 이름으로 object를 생성한다.', () => {
        const names = ['yoo', 'vin'];
        const result = app.createCars(names);
        expect(result).toEqual({
            yoo: 0,
            vin: 0,
        });
    });
});
