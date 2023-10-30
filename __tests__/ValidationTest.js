import { isLongerThan5, isNumber, isNumberAtLeast4 } from "../src/utils/validation"

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
    test("이름의 길이 검사 - 5자 이하", () => {
        const input = "bong";
        const result = isLongerThan5(input);

        expect(result).toBeFalsy();
    });
    test("이름의 길이 검사 - 5자 초과", () => {
        const input = "soyoung125";
        const result = isLongerThan5(input);

        expect(result).toBeTruthy();
    });
    test("랜덤 숫자가 4 이상인지 검사 - 4 이상인 경우", () => {
        const random = 7;
        const result = isNumberAtLeast4(random);

        expect(result).toBeTruthy();
    });
    test("랜덤 숫자가 4 이상인지 검사 - 4 미만인 경우", () => {
        const random = 2;
        const result = isNumberAtLeast4(random);

        expect(result).toBeFalsy();
    });
})