import App from '../src/App';
import { MissionUtils } from '@woowacourse/mission-utils';

const mockQuestions = inputs => {
    MissionUtils.Console.readLineAsync = jest.fn();

    MissionUtils.Console.readLineAsync.mockImplementation(() => {
        const input = inputs.shift();
        return Promise.resolve(input);
    });
};

const mockRandoms = numbers => {
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

describe('유닛 테스트', () => {
    test('경주할 자동차 이름을 입력 받는 기능', async () => {
        mockQuestions(['1,2']);

        const app = new App();
        const result = await app.getInputNames();

        expect(result).toEqual('1,2');
    });

    test('이름을 분리하여 배열로 변환하는 기능', async () => {
        const app = new App();
        const result = app.getSplittedName('1,2');

        const expectResult = ['1', '2'];

        result.forEach((resultItem, i) => {
            expect(resultItem).toEqual(expectResult[i]);
        });
    });

    test('이름에 유효성 검사를 하는 기능', () => {
        const inputs = [[], [''], ['123456'], ['12345', '123456']];
        const app = new App();

        const expectResult = [
            '[ERROR] 하나 이상의 이름을 입력해주세요.',
            '[ERROR] 1글자 이상, 5글자 이하의 이름만 사용 가능 합니다.',
            '[ERROR] 1글자 이상, 5글자 이하의 이름만 사용 가능 합니다.',
            '[ERROR] 1글자 이상, 5글자 이하의 이름만 사용 가능 합니다.',
        ];

        inputs.forEach((input, i) => {
            expect(() => {
                app.nameValidate(input);
            }).toThrow(expectResult[i]);
        });
    });

    test('시도할 횟수를 입력 받는 기능', async () => {
        mockQuestions(['5']);

        const app = new App();
        const result = await app.getInputTryCount();

        expect(result).toEqual(5);
    });

    test('입력받은 값에 유효성 검사를 하는 기능', () => {
        const inputs = ['', '문자', 0, -1];
        const app = new App();

        const expectResult = [
            '[ERROR] 숫자가 잘못된 형식입니다.',
            '[ERROR] 숫자가 잘못된 형식입니다.',
            '[ERROR] 1 이상의 숫자를 입력해주세요.',
            '[ERROR] 1 이상의 숫자를 입력해주세요.',
        ];

        inputs.forEach((input, i) => {
            expect(() => {
                app.tryCountValidate(input);
            }).toThrow(expectResult[i]);
        });
    });

    test('각 자동차의 이동 횟수를 담을 수 있는 객체를 만드는 기능', () => {
        const inputs = ['car1', 'car2', 'car3'];
        const app = new App();

        const expectResult = [
            { name: 'car1', move: 0 },
            { name: 'car2', move: 0 },
            { name: 'car3', move: 0 },
        ];

        expect(app.getCarObjArr(inputs)).toEqual(expectResult);
    });

    test('무작위 숫자를 가져오는 기능', () => {
        mockRandoms([7]);
        const app = new App();

        expect(app.getRandomNumberForRacing()).toEqual(7);
    });

    test('무작위 숫자를 판독하여 자동차를 이동 시키는 기능', () => {
        const inputs = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        const testCar = { name: 'testCar', move: 0 };
        const app = new App();

        const expectResult = [
            { name: 'testCar', move: 0 }, // 0
            { name: 'testCar', move: 0 }, // 1
            { name: 'testCar', move: 0 }, // 2
            { name: 'testCar', move: 0 }, // 3
            { name: 'testCar', move: 1 }, // 4
            { name: 'testCar', move: 2 }, // 5
            { name: 'testCar', move: 3 }, // 6
            { name: 'testCar', move: 4 }, // 7
            { name: 'testCar', move: 5 }, // 8
            { name: 'testCar', move: 6 }, // 9
        ];

        inputs.forEach((input, i) => {
            app.moveCar(testCar, input);
            expect(testCar).toEqual(expectResult[i]);
        });
    });

    test('자동차의 현재 상태를 출력하는 기능', () => {
        const input = { name: 'testCar', move: 3 };
        const app = new App();
        const logSpy = getLogSpy();

        app.printCarStatus(input);
        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('testCar : ---'));
    });

    test('가장 많이 이동한 횟수를 찾는 기능', () => {
        const input = [
            { name: 'car1', move: 3 },
            { name: 'car2', move: 5 },
            { name: 'car3', move: 2 },
        ];
        const app = new App();

        expect(app.getMaxMoveCnt(input)).toEqual(5);
    });

    test('우승한 자동차들을 필터링 하는 기능', () => {
        const inputs = [
            [
                { name: 'car1', move: 1 },
                { name: 'car2', move: 5 },
                { name: 'car3', move: 3 },
            ],
            [
                { name: 'car1', move: 5 },
                { name: 'car2', move: 5 },
                { name: 'car3', move: 2 },
            ],
        ];
        const app = new App();

        const expectResult = [
            [{ name: 'car2', move: 5 }],
            [
                { name: 'car1', move: 5 },
                { name: 'car2', move: 5 },
            ],
        ];

        inputs.forEach((input, i) => {
            expect(app.filterWonCar(input, app.getMaxMoveCnt(input))).toEqual(expectResult[i]);
        });
    });

    test('우승한 자동차를 출력하는 기능', () => {
        const inputs = [
            [{ name: 'car3', move: 3 }],
            [
                { name: 'car1', move: 5 },
                { name: 'car2', move: 5 },
            ],
        ];
        const app = new App();
        const logSpy = getLogSpy();

        const expectResult = ['최종 우승자 : car3', '최종 우승자 : car1, car2'];

        inputs.forEach((input, i) => {
            app.printWonCar(input);
            expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(expectResult[i]));
        });
    });
});
