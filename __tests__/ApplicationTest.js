import App from '../src/App.js';
import { MissionUtils } from '@woowacourse/mission-utils';

export const mockQuestions = (inputs) => {
    MissionUtils.Console.readLineAsync = jest.fn();

    MissionUtils.Console.readLineAsync.mockImplementation(() => {
        const input = inputs.shift();
        return Promise.resolve(input);
    });
};

export const mockRandoms = (numbers) => {
    MissionUtils.Random.pickNumberInRange = jest.fn();
    numbers.reduce((acc, number) => {
        return acc.mockReturnValueOnce(number);
    }, MissionUtils.Random.pickNumberInRange);
};

export const getLogSpy = () => {
    const logSpy = jest.spyOn(MissionUtils.Console, 'print');
    logSpy.mockClear();
    return logSpy;
};

describe('자동차 경주 게임', () => {
    test('전진-정지', async () => {
        // given
        const MOVING_FORWARD = 4;
        const STOP = 3;
        const inputs = ['pobi,woni', '1'];
        const outputs = ['pobi : -'];
        const randoms = [MOVING_FORWARD, STOP];
        const logSpy = getLogSpy();

        mockQuestions(inputs);
        mockRandoms([...randoms]);

        // when
        const app = new App();
        await app.play();

        // then
        outputs.forEach((output) => {
            expect(logSpy).toHaveBeenCalledWith(
                expect.stringContaining(output),
            );
        });
    });

    test.each([[['pobi,javaji']], [['pobi,eastjun']]])(
        '이름에 대한 예외 처리',
        async (inputs) => {
            // given
            mockQuestions(inputs);

            // when
            const app = new App();

            // then
            await expect(app.play()).rejects.toThrow('[ERROR]');
        },
    );

    test('기본 예제 복원', async () => {
        // given
        const MOVING_FORWARD = 4;
        const STOP = 3;
        const inputs = ['pobi,woni,jun', '5'];
        const outputs = [
            '\n실행 결과',
            'pobi : -\nwoni :\njun : -\n',
            'pobi : --\nwoni : -\njun : --\n',
            'pobi : ---\nwoni : --\njun : ---\n',
            'pobi : ----\nwoni : ---\njun : ----\n',
            'pobi : -----\nwoni : ----\njun : -----\n',
            '최종 우승자 : pobi, jun',
        ];
        const randoms = [
            [MOVING_FORWARD, STOP, MOVING_FORWARD],
            [MOVING_FORWARD, MOVING_FORWARD, MOVING_FORWARD],
            [MOVING_FORWARD, MOVING_FORWARD, MOVING_FORWARD],
            [MOVING_FORWARD, MOVING_FORWARD, MOVING_FORWARD],
            [MOVING_FORWARD, MOVING_FORWARD, MOVING_FORWARD],
        ].reduce((acc, cur) => acc.concat(cur));
        const logSpy = getLogSpy();

        mockQuestions(inputs);
        mockRandoms(randoms);

        // when
        const app = new App();
        await app.play();

        // then
        outputs.forEach((output) => {
            expect(logSpy).toHaveBeenCalledWith(
                expect.stringContaining(output),
            );
        });
    });

    test('추가 테스트', async () => {
        // given

        const inputs = ['foo,bar,baz,qux,fred', '9'];
        const outputs = [
            '\n실행 결과',
            'foo : -\nbar : -\nbaz :\nqux :\nfred : -\n',
            'foo : -\nbar : -\nbaz : -\nqux : -\nfred : --\n',
            'foo : --\nbar : -\nbaz : -\nqux : --\nfred : ---\n',
            'foo : --\nbar : -\nbaz : -\nqux : ---\nfred : ----\n',
            'foo : ---\nbar : --\nbaz : --\nqux : ---\nfred : ----\n',
            'foo : ----\nbar : ---\nbaz : ---\nqux : ----\nfred : -----\n',
            'foo : -----\nbar : ---\nbaz : ---\nqux : ----\nfred : ------\n',
            'foo : ------\nbar : ----\nbaz : ---\nqux : -----\nfred : ------\n',
            'foo : ------\nbar : ----\nbaz : ----\nqux : ------\nfred : ------\n',
            '최종 우승자 : foo, qux, fred',
        ];
        const randoms = [
            [4, 7, 3, 2, 9],
            [1, 3, 5, 8, 4],
            [5, 2, 3, 4, 4],
            [1, 2, 3, 4, 5],
            [6, 7, 8, 3, 3],
            [9, 8, 7, 6, 5],
            [4, 3, 2, 1, 4],
            [5, 8, 3, 4, 3],
            [2, 1, 4, 4, 3],
        ].reduce((acc, cur) => acc.concat(cur));
        const logSpy = getLogSpy();

        mockQuestions(inputs);
        mockRandoms(randoms);

        // when
        const app = new App();
        await app.play();

        // then
        outputs.forEach((output) => {
            expect(logSpy).toHaveBeenCalledWith(
                expect.stringContaining(output),
            );
        });
    });
});
