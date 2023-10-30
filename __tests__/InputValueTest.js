import Valiation from '../src/utils/Validation';

describe('입력 값 테스트', () => {
    test('값이 입력되지 않았을 경우, 예외 처리를 한다.', () => {
        const inputValue = ['', null, undefined];

        inputValue.forEach((input) => {
            expect(() => Valiation.checkNull(input)).toThrow('[ERROR] 값을 입력해주세요.');
        })
    });

    test('각 자동차 이름이 6자 이상인 경우, 예외 처리를 한다.', () => {
        expect(() => Valiation.checkNameLength(['mynameiskelvin'])).toThrow('[ERROR] 각 입력값은 5자 이하만 가능합니다.');
    });

    test('숫자가 아닌 값이 입력된 경우, 예외 처리를 한다.', () => {
        expect(() => Valiation.checkCount('string')).toThrow('[ERROR] 시도 횟수는 양의 정수여야 합니다.');
    });
})
