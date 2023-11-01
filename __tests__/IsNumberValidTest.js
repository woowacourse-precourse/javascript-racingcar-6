import isNumberValid from "../src/functions/isNumberVaild";

describe("사용자에게 입력받은 숫자가 올바른지 확인하는 함수 테스트", () => {
    test("입력값이 숫자 형식이 아닐 때 예외 처리", () => {
        const input = Number("숫자 아님");

        expect(() => isNumberValid(input)).toThrow(`[ERROR] 시도 횟수는 숫자 형식이어야 합니다.`);
  });

    test("입력값이 정수가 아닐 때 예외 처리", () => {
        const input = 123.123;

        expect(() => isNumberValid(input)).toThrow(`[ERROR] 시도 횟수는 정수형이어야 합니다.`);
  });

    test("입력값이 음수일 때 예외 처리", () => {
        const input = -100;

        expect(() => isNumberValid(input)).toThrow(`[ERROR] 0 ~ ${Number.MAX_SAFE_INTEGER} 사이의 수를 입력해주세요.`);
  });
    test("입력값이 MAX_SAFE_INTEGER을 초과할 때 예외 처리", () => {
        const input = Number.MAX_SAFE_INTEGER + 1;

        expect(() => isNumberValid(input)).toThrow(`[ERROR] 0 ~ ${Number.MAX_SAFE_INTEGER} 사이의 수를 입력해주세요.`);
    });
});
