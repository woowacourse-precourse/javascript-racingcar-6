import GetAttemptsFromUser from "../src/getAttempts/GetAttemptsFromUser";
import { MissionUtils } from "@woowacourse/mission-utils";

const mockQuestions = (inputs) => {
	MissionUtils.Console.readLineAsync = jest.fn();

	MissionUtils.Console.readLineAsync.mockImplementation(() => {
		const input = inputs.shift();
		return Promise.resolve(input);
	});
};

describe("GetAttemptsFromUser 메소드 테스트", () => {
	test("올바른 숫자 형식을 입력했을 경우 그대로 반환", async () => {
		const inputs = ["3"];
		mockQuestions(inputs);
		await expect(GetAttemptsFromUser()).resolves.toEqual(3);
	});

	test("올바른 숫자 형식이 아닐 경우 예외 처리", async () => {
		const inputs = ["a"];
		mockQuestions(inputs);
		await expect(GetAttemptsFromUser()).rejects.toThrow("[ERROR]");
	});
});
