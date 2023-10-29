import { checkCarName, checkRaceCount } from '../src/Validation.js';

describe("자동차 이름 테스트", () => {
    test("구분자가 포함되지 않은 경우 에러 반환", () => {
        const input = "test";

        expect(() => checkCarName(input)).toThrow("[ERROR]");
    });

    test("구분된 이름이 5자 이상일 시 에러 반환", () => {
        const input = "test,errortest";

        expect(() => checkCarName(input)).toThrow("[ERROR]");
    });
});

describe("경주할 횟수 테스트", () => {
    test("숫자가 아닐 경우 에러 반환", () => {
        const input = "test";

        expect(() => checkRaceCount(input)).toThrow("[ERROR]");
    });
});