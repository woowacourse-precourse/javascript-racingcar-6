import RACING from "../src/constants/message";
import { checkName, checkNumber } from "../src/util/check";

describe("util 함수 테스트", () => {
    test("전달 받은 문자열이 정상적으로 판단이 될 경우", async () => {
        const input = ["pobi", "zero"];
        const result = await checkName(input)

        expect(result).toBeUndefined();
    });

    test("전달 받은 문자열이 비정상적으로 판단이 될 경우", async () => {
        const input = ["pobi", "zerozero"];
        await expect(checkName(input)).rejects.toThrow(RACING.NAMING_ERROR);
    });

    test("전달 받은 문자열이 중복된 값이 있을 경우", async () => {
        const input = ["pobi", "pobi"];
        await expect(checkName(input)).rejects.toThrow(RACING.NAMING_ERROR);
    });

    test("전달 받은 숫자가 정상적으로 판단이 될 경우", async () => {
        const input = 5;
        const result = await checkNumber(input)

        expect(result).toBeUndefined();
    });

    test("전달 받은 숫자가 비정상적으로 판단이 될 경우", async () => {
        const input = "zero";
        await expect(checkNumber(input)).rejects.toThrow(RACING.NUMBER_ERROR);
    });

    test("전달 받은 숫자가 음수일 경우", async () => {
        const input = -2;
        await expect(checkNumber(input)).rejects.toThrow(RACING.NUMBER_ERROR);
    });
});