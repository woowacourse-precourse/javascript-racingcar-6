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
    const inputs = ['yoo, vin', 'yoovin, vin', '5', '-5', 'a'];
    const randoms = [4, 5, 3, 6, 2, 1];

    mockQuestions(inputs);
    mockRandoms([...randoms]);

    test('이름을 입력받는다.', async () => {
        const result = await app.getUserInput();
        expect(result).toEqual(['yoo', 'vin']);
    });

    test('입력받은 이름이 5글자가 넘으면 error 발생', async () => {
        await expect(app.getUserInput()).rejects.toThrow('[ERROR]');
    });

    test('입력받은 이름으로 object를 생성한다.', () => {
        const names = ['yoo', 'vin'];
        const result = app.createCars(names);
        expect(result).toEqual({
            yoo: 0,
            vin: 0,
        });
    });

    test('횟수를 입력받는다.', async () => {
        const result = await app.getTryCount();
        expect(result).toEqual(5);
    });

    test('횟수가 0보다 작으면 error 발생', async () => {
        await expect(app.getTryCount()).rejects.toThrow('[ERROR]');
    });

    test('횟수가 숫자가 아니면 error 발생', async () => {
        await expect(app.getTryCount()).rejects.toThrow('[ERROR]');
    });

    test('경기를 진행한다.', () => {
        const tryCount = 3;
        const cars = {
            yoo: 0,
            vin: 0,
        };
        const result = app.playGame(tryCount, cars);
        expect(result).toEqual({
            yoo: 1,
            vin: 2,
        });
    });

    test('경기 현황을 출력한다.', () => {
        const logSpy = getLogSpy();
        const cars = {
            yoo: 1,
            vin: 2,
        };
        app.printGameStatus(cars);
        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('yoo : -'));
    });

    test('우승자를 출력한다.', () => {
        const logSpy = getLogSpy();
        const cars = {
            yoo: 1,
            vin: 2,
        };
        app.printWinner(cars);
        expect(logSpy).toHaveBeenCalledWith(
            expect.stringContaining('최종 우승자 : vin')
        );
    });

    test('우승자가 두명 이상이면 쉼표로 구분하여 출력한다.', () => {
        const logSpy = getLogSpy();
        const cars = {
            yoo: 1,
            vin: 2,
            shim: 2,
        };
        app.printWinner(cars);
        expect(logSpy).toHaveBeenCalledWith(
            expect.stringContaining('최종 우승자 : vin, shim')
        );
    });
});
