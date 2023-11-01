import { ERROR_MESSAGE } from '../src/Constant';
import { HandleInput } from '../src/utils/HandleInput';
import { mockQuestions } from './ApplicationTest';

describe('이름 입력 테스트', () => {
    test('공백이 포함된 이름은 정상적으로 처리되어야 한다.', async () => {
        const inputs = ['fo o,bar,baz'];
        const expected = ['fo o', 'bar', 'baz'];
        mockQuestions(inputs);

        const result = await HandleInput.carNames();

        expect(result).toEqual(expected);
    });

    test('이모지(UTF-8)는 정상적으로 처리되어야 한다.', async () => {
        const inputs = ['😀,😀😀'];
        mockQuestions(inputs);
        const expected = ['😀', '😀😀'];

        const result = await HandleInput.carNames();
        expect(result).toEqual(expected);
    });

    test('중복이 존재하는 이름은 예외로 처리되어야 한다.', async () => {
        const inputs = ['foo,foo'];
        mockQuestions(inputs);

        await expect(HandleInput.carNames()).rejects.toThrow(
            ERROR_MESSAGE.UNIQUE_CONSTRAINT_VIOLATED,
        );
    });

    test('5글자가 넘는 이름은 예외로 처리되어야 한다.)', async () => {
        const inputs = ['foobar,baz'];
        mockQuestions(inputs);

        await expect(HandleInput.carNames()).rejects.toThrow(
            ERROR_MESSAGE.INVALID_NAME_LENGTH,
        );
    });

    test('1개의 이름만 입력된 경우 예외로 처리되어야 한다.', async () => {
        const inputs = ['😀'];
        mockQuestions(inputs);

        await expect(HandleInput.carNames()).rejects.toThrow(
            ERROR_MESSAGE.INVALID_GROUP_SIZE,
        );
    });

    test('0글자를 갖는 입력이 주어질 경우 예외로 처리되어야 한다.', async () => {
        const inputs = ['foo,bar,,baz'];
        mockQuestions(inputs);

        await expect(HandleInput.carNames()).rejects.toThrow(
            ERROR_MESSAGE.INVALID_NAME_LENGTH,
        );
    });

    test('공백만 입력된 경우는 예외로 처리되어야 한다.', async () => {
        const inputs = [''];
        mockQuestions(inputs);

        await expect(HandleInput.carNames()).rejects.toThrow(
            ERROR_MESSAGE.INVALID_GROUP_SIZE,
        );
    });
});

describe('라운드 입력 테스트', () => {
    test('Number.MAX_SAFE_INTEGER보다 같거나 작은 수는 정상적으로 처리되어야 한다.', async () => {
        const inputs = [Number.MAX_SAFE_INTEGER.toString()];
        const expected = Number.MAX_SAFE_INTEGER;
        mockQuestions(inputs);

        const result = await HandleInput.gameRounds();

        expect(result).toEqual(expected);
    });

    test('1만까지의 자연수는 정상적으로 처리되어야 한다.', async () => {
        const LENGTH = 10000;
        const inputs = Array.from({ length: LENGTH }, (_, i) => String(i + 1));
        mockQuestions(inputs);

        inputs.forEach(async (_, i) => {
            const result = await HandleInput.gameRounds();
            expect(result).toEqual(i + 1);
        });
    });

    test('숫자가 아닌 입력이 주어지는 경우 예외로 처리되어야 한다.', async () => {
        const inputs = ['@%$'];
        mockQuestions(inputs);

        await expect(HandleInput.gameRounds()).rejects.toThrow(
            ERROR_MESSAGE.NOT_AN_INT,
        );
    });

    test('Number.MAX_SAFE_INTEGER보다 큰 수는 예외로 처리되어야 한다.', async () => {
        const inputs = [(Number.MAX_SAFE_INTEGER + 1).toString()];
        mockQuestions(inputs);

        await expect(HandleInput.gameRounds()).rejects.toThrow(
            ERROR_MESSAGE.INVALID_GAME_ROUND,
        );
    });

    test('정수가 아닌 수가 주어졌을 경우 예외로 처리되어야 한다.', async () => {
        const inputs = ['34.5'];
        mockQuestions(inputs);

        await expect(HandleInput.gameRounds()).rejects.toThrow(
            ERROR_MESSAGE.NOT_AN_INT,
        );
    });

    test('음수가 주어진 경우 예외로 처리되어야 한다.', async () => {
        const inputs = ['-45'];
        mockQuestions(inputs);

        await expect(HandleInput.gameRounds()).rejects.toThrow(
            ERROR_MESSAGE.INVALID_GAME_ROUND,
        );
    });

    test('0은 예외로 처리되어야 한다.', async () => {
        const inputs = ['0'];
        mockQuestions(inputs);

        await expect(HandleInput.gameRounds()).rejects.toThrow(
            ERROR_MESSAGE.INVALID_GAME_ROUND,
        );
    });

    test('-0은 예외로 처리되어야 한다.', async () => {
        const inputs = ['-0'];
        mockQuestions(inputs);

        await expect(HandleInput.gameRounds()).rejects.toThrow(
            ERROR_MESSAGE.NOT_AN_INT,
        );
    });
});
