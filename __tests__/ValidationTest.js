import { isNumber } from "../src/utils/validation"

describe("validation.js 테스트", () => {
    test("숫자 형식 여부 검사 - 숫자 입력", () => {
        const input = "12"
        const result = isNumber(input);

        expect(result).toBeTruthy();
    });
    test("숫자 형식 여부 검사 - 문자 포함 입력", () => {
        const input = "12ab!"
        const result = isNumber(input);

        expect(result).toBeFalsy();
    });
})