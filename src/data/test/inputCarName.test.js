import { isCheckInputValue } from '../inputCarName';
import { isCheckInputCount } from '../inputCarName';

describe('사용자 입력 테스트', () => {
    test('2개 미만으로 입력 시 에러 테스트', async () => {
        const errorInput = ['hyuk'];
        const properInput = ['hyuk', 'pobi'];
        expect(() => isCheckInputValue(errorInput)).toThrow(Error);
        expect(isCheckInputValue(properInput)).toBe(true);
    })

    test('6자 이상 입력 시 에러 테스트', async () => {
        const errorInput = ['hyukhyuk', 'pobi'];
        const properInput = ['hyuk', 'pobi'];
        expect(() => isCheckInputCount(errorInput)).toThrow(Error);
        expect(isCheckInputCount(properInput)).toBe(true);
    })
});