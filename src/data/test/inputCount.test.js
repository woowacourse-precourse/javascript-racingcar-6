import { isCheckNumber } from '../inputCount';
import { isCheckProperRange } from '../inputCount';

describe('시도 횟수 입력 테스트', () => {
    test('숫자가 아닌 텍스트 입력 시 에러 테스트', () => {
        expect(() => isCheckNumber('str')).toThrow(Error);
        expect(isCheckNumber('1')).toBe(true);
    });

    test('1부터 10까지가 아닌 횟수를 입력 시 에러 테스트', () => {
        expect(() => isCheckProperRange(100)).toThrow(Error);
        expect(isCheckProperRange('10')).toBe(true);
    });
});