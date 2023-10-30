import checkName from "../src/util/check";

describe("util 함수 테스트", () => {
    test("전달 받은 문자열이 정상적으로 판단이 될 경우", () => {
        const input = ["pobi", "zero"];
        const result = checkName(input)

        expect(result).toBeUndefined();
    });

    test("전달 받은 문자열이 비정상적으로 판단이 될 경우", async () => {
        const input = ["pobi", "zerozero"];
        await expect(checkName(input)).rejects.toThrow("[ERROR]");
    });
});