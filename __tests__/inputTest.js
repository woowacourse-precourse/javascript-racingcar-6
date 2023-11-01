import App from '../src/App.js';
import { MissionUtils } from '@woowacourse/mission-utils';
import { ERROR } from '../src/pages/texts.js';

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

describe('입력값 예외 처리', () => {
    test('6글자 이상일때', async () => {
        // given

        /** 전진 */
        const MOVING_FORWARD = 4;
        /** 정지 */
        const STOP = 3;
        /** 입력 */
        const inputs = ['dobby,gangmin', '1'];

        const randoms = [MOVING_FORWARD, STOP];

        mockQuestions(inputs);
        mockRandoms([...randoms]);

        // when
        const app = new App();

        // then
        await expect(app.play()).rejects.toThrow('[ERROR]');
    });
});

describe('입력값 예외 처리', () => {
    test('특수문자일때', async () => {
        // given

        /** 전진 */
        const MOVING_FORWARD = 4;
        /** 정지 */
        const STOP = 3;
        /** 입력 */
        const inputs = ['~!@#$%^&*', '5'];

        const randoms = [MOVING_FORWARD, STOP];

        mockQuestions(inputs);
        mockRandoms([...randoms]);

        // when
        const app = new App();

        // then
        await expect(app.play()).rejects.toThrow('[ERROR]');
    });

    test('split 메서드로 주어진 값을 구분', () => {
        const input = '1,2';
        const result = input.split(',');

        expect(result).toContain('2', '1');
        expect(result).toContainEqual('1', '2');
    });

    test('split 메서드로 구분자가 포함되지 않은 경우 값을 그대로 반환', () => {
        const input = '1';
        const result = input.split(',');

        expect(result).toContain('1');
    });

    test('substring 메서드로 특정 구간 값을 반환', () => {
        const input = '(1,2)';
        const result = input.substring(1, 4);

        expect(result).toEqual('1,2');
    });

    test('at 메서드로 특정 위치의 문자 찾기', () => {
        const input = 'abc';
        const result = input.at(0);

        expect(result).toEqual('a');
    });
});
