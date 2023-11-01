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

describe("시도할 횟수 입력 테스트", () => {
	test("'1'을 입력한 경우", async () => {
		mockQuestions("1");

		const racingcarGame = new RacingcarGame();
		const number = await racingcarGame.getNumberOfAttempts();

		expect(number).toEqual(1);
	});

	test("'00123'을 입력한 경우", async () => {
		mockQuestions("00123");

		const racingcarGame = new RacingcarGame();
		const number = await racingcarGame.getNumberOfAttempts();

		expect(number).toEqual(123);
	});

	test("'512831238522'을 입력한 경우", async () => {
		mockQuestions("512831238522");

		const racingcarGame = new RacingcarGame();
		const number = await racingcarGame.getNumberOfAttempts();

		expect(number).toEqual(512831238522);
	});

	test("예외: 'a'을 입력한 경우", async () => {
		mockQuestions("a");

		await expect(async () => {
			const racingcarGame = new RacingcarGame();
			await racingcarGame.getNumberOfAttempts();
		}).rejects.toThrowError(ERROR_MESSAGE.onlyNaturalNumber);
	});

	test("예외: '10px'을 입력한 경우", async () => {
		mockQuestions("10px");

		await expect(async () => {
			const racingcarGame = new RacingcarGame();
			await racingcarGame.getNumberOfAttempts();
		}).rejects.toThrowError(ERROR_MESSAGE.onlyNaturalNumber);
	});

	test("예외: '10.5'을 입력한 경우", async () => {
		mockQuestions("10.5");

		await expect(async () => {
			const racingcarGame = new RacingcarGame();
			await racingcarGame.getNumberOfAttempts();
		}).rejects.toThrowError(ERROR_MESSAGE.onlyNaturalNumber);
	});

	test("예외: '-2'을 입력한 경우", async () => {
		mockQuestions("-2");

		await expect(async () => {
			const racingcarGame = new RacingcarGame();
			await racingcarGame.getNumberOfAttempts();
		}).rejects.toThrowError(ERROR_MESSAGE.onlyNaturalNumber);
	});

	test("예외: '0'을 입력한 경우", async () => {
		mockQuestions("0");

		await expect(async () => {
			const racingcarGame = new RacingcarGame();
			await racingcarGame.getNumberOfAttempts();
		}).rejects.toThrowError(ERROR_MESSAGE.onlyNaturalNumber);
	});
});
