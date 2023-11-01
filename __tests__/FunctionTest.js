import App from "../src/App.js";
import { MissionUtils, Console } from "@woowacourse/mission-utils";


const getLogSpy = () => {
	const logSpy = jest.spyOn(MissionUtils.Console, "print");
	logSpy.mockClear();
	return logSpy;
};

describe("문자열 테스트", () => {
	test("이름 입력값의 쉼표(,) 구분 및 중복값 확인", async () => {
		const input = "pobi,javaji"

		const app = new App();

		await expect(app.hasDuplicateName(input)).toBe(false);
	});

	test("이름 입력 예외값 확인", async () => {
		const input = "pobi, ,matt";

		const app = new App();

		await expect(app.hasDuplicateName(input)).toBe(false);
	});
});


describe("숫자 입력값 확인", () => {
	test("횟수 입력값 확인", async () => {
		const cnt = "3"

		const app = new App();

		await expect(app.isNumeric(cnt)).toBe(true);
	});

	test("횟수 입력값 예외 확인", async () => {
		const cnt = "matt";

		const app = new App();

		await expect(app.isNumeric(cnt)).toBe(false);
	});
});

describe("결과 출력 확인", () => {
	test("isMoveForward의 결과 출력", async () => {
		const namesList = ["pobi", "javaji", "matt"];
		const resultArr = [false, false, true];
		const output = "matt : -";
		const logSpy = getLogSpy();

		const app = new App();
		const printResult = app.getResult(namesList, resultArr);

		await expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
	});
});