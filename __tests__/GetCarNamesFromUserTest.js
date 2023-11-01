import GetCarNamesFromUser from "../src/getCarNames/GetCarNamesFromUser";
import { MissionUtils } from "@woowacourse/mission-utils";

const mockQuestions = (inputs) => {
	MissionUtils.Console.readLineAsync = jest.fn();

	MissionUtils.Console.readLineAsync.mockImplementation(() => {
		const input = inputs.shift();
		return Promise.resolve(input);
	});
};

describe("GetCarNamesFromUser 메소드 테스트", () => {
	test(",가 없을 경우 문자열 그대로 반환", async () => {
		const inputs = ["pobi"];
		mockQuestions(inputs);
		await expect(GetCarNamesFromUser()).resolves.toContain("pobi");
	});

	test(",를 기준으로 문자열을 나눠서 반환", async () => {
		const inputs = ["pobi,woni"];
		mockQuestions(inputs);
		await expect(GetCarNamesFromUser()).resolves.toEqual(["pobi", "woni"]);
	});

	test("자동차의 이름 길이가 5를 초과할 경우 예외 처리", async () => {
		const inputs = ["abcdef"];
		mockQuestions(inputs);
		await expect(GetCarNamesFromUser()).rejects.toThrow("[ERROR]");
	});
});
