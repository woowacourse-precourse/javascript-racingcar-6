/* eslint-disable no-undef */

import { MissionUtils } from "@woowacourse/mission-utils";
import RacingcarGame from "../../src/RacingcarGame/index.js";
import { ERROR_MESSAGE } from "../../src/constants/message.js";

const mockQuestions = (input) => {
	MissionUtils.Console.readLineAsync = jest.fn();

	MissionUtils.Console.readLineAsync.mockImplementationOnce(() =>
		Promise.resolve(input),
	);
};

describe("경주할 자동차 이름 입력 테스트", () => {
	test("1대 입력한 경우", async () => {
		const input = "pobi";

		mockQuestions(input);

		const racingcarGame = new RacingcarGame();
		const result = await racingcarGame.getNamesOfCars();

		expect(result).toEqual(["pobi"]);
	});

	test("3대 입력한 경우", async () => {
		const input = "pobi,woni,jun";

		mockQuestions(input);

		const racingcarGame = new RacingcarGame();
		const result = await racingcarGame.getNamesOfCars();

		expect(result).toEqual(["pobi", "woni", "jun"]);
	});

	test("예외: 5자 초과되는 이름이 있는 경우", async () => {
		const input = "pobi,woni,jun,youngsu";

		mockQuestions(input);

		await expect(async () => {
			const racingcarGame = new RacingcarGame();
			await racingcarGame.getNamesOfCars();
		}).rejects.toThrowError(ERROR_MESSAGE.lengthOfNameOverFive);
	});

	test("예외: 이름에 중복이 있는 경우", async () => {
		const input = "pobi,woni,jun,pobi";

		mockQuestions(input);

		await expect(async () => {
			const racingcarGame = new RacingcarGame();
			await racingcarGame.getNamesOfCars();
		}).rejects.toThrowError(ERROR_MESSAGE.existDuplicateName);
	});
});
