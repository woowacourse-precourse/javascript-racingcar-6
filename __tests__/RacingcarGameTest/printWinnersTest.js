/* eslint-disable no-undef */

import { MissionUtils } from "@woowacourse/mission-utils";
import RacingcarGame from "../../src/RacingcarGame/index.js";
import Car from "../../src/RacingcarGame/Car.js";

const mockQuestions = (inputs) => {
	MissionUtils.Console.readLineAsync = jest.fn();

	MissionUtils.Console.readLineAsync.mockImplementation(() => {
		const input = inputs.shift();
		return Promise.resolve(input);
	});
};

const mockRandoms = (numbers) => {
	MissionUtils.Random.pickNumberInRange = jest.fn();
	numbers.reduce(
		(acc, number) => acc.mockReturnValueOnce(number),
		MissionUtils.Random.pickNumberInRange,
	);
};

const getPrintSpy = () => {
	const printSpy = jest.spyOn(MissionUtils.Console, "print");
	printSpy.mockClear();
	return printSpy;
};

describe("최종 우승자 판정 테스트", () => {
	test("단독 우승자", async () => {
		const inputs = ["pobi,woni,jun", "5"];
		const randomNumbers = [4, 3, 5, 3, 0, 9, 5, 7, 8, 2, 6, 1, 1, 3, 6];
		const result = "최종 우승자 : jun";

		const printSpy = getPrintSpy();

		mockQuestions(inputs);
		mockRandoms(randomNumbers);

		const racingcarGame = new RacingcarGame();
		racingcarGame.cars = (await racingcarGame.getNamesOfCars()).map(
			(name) => new Car(name),
		);
		racingcarGame.numberOfAttempts = await racingcarGame.getNumberOfAttempts();
		racingcarGame.raceStart();
		const winners = racingcarGame.judgeWinners();
		racingcarGame.printWinners(winners);

		expect(printSpy).toHaveBeenCalledWith(result);
	});

	test("공동 우승자", async () => {
		const inputs = ["pobi,woni,jun", "5"];
		const randomNumbers = [4, 9, 5, 3, 5, 9, 5, 7, 8, 2, 6, 1, 1, 3, 6];
		const result = "최종 우승자 : woni, jun";

		const printSpy = getPrintSpy();

		mockQuestions(inputs);
		mockRandoms(randomNumbers);

		const racingcarGame = new RacingcarGame();
		racingcarGame.cars = (await racingcarGame.getNamesOfCars()).map(
			(name) => new Car(name),
		);
		racingcarGame.numberOfAttempts = await racingcarGame.getNumberOfAttempts();
		racingcarGame.raceStart();
		const winners = racingcarGame.judgeWinners();
		racingcarGame.printWinners(winners);

		expect(printSpy).toHaveBeenCalledWith(result);
	});
});
