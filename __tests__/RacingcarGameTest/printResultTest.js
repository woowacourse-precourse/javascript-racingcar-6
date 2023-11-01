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
	// const printSpy = jest.spyOn(MissionUtils.Console, "print");
	// printSpy.mockClear();
	// return printSpy;
	MissionUtils.Console.print = jest.fn();
	return MissionUtils.Console.print;
};

describe("실행 결과 출력 테스트", () => {
	test("numberOfAttempts = 1, numberOfCars = 1", async () => {
		const inputs = ["pobi", "1"];
		const randomNumbers = [4];
		const outputs = ["\n실행 결과", "pobi : -"];
		const printSpy = getPrintSpy();

		mockQuestions(inputs);
		mockRandoms(randomNumbers);

		const racingcarGame = new RacingcarGame();
		racingcarGame.cars = (await racingcarGame.getNamesOfCars()).map(
			(name) => new Car(name),
		);
		racingcarGame.numberOfAttempts = await racingcarGame.getNumberOfAttempts();
		racingcarGame.raceStart();
		racingcarGame.printResult();

		outputs.forEach((output) => {
			expect(printSpy).toHaveBeenCalledWith(output);
		});
	});

	test("numberOfAttempts = 1, numberOfCars = 3", async () => {
		const inputs = ["pobi,woni,jun", "1"];
		const randomNumbers = [4, 3, 5];
		const outputs = ["\n실행 결과", "pobi : -", "woni : ", "jun : -"];
		const printSpy = getPrintSpy();

		mockQuestions(inputs);
		mockRandoms(randomNumbers);

		const racingcarGame = new RacingcarGame();
		racingcarGame.cars = (await racingcarGame.getNamesOfCars()).map(
			(name) => new Car(name),
		);
		racingcarGame.numberOfAttempts = await racingcarGame.getNumberOfAttempts();
		racingcarGame.raceStart();
		racingcarGame.printResult();

		outputs.forEach((output) => {
			expect(printSpy).toHaveBeenCalledWith(output);
		});
	});

	test("numberOfAttempts = 3, numberOfCars = 1", async () => {
		const inputs = ["pobi", "3"];
		const randomNumbers = [3];
		const outputs = ["\n실행 결과", "pobi : "];
		const printSpy = getPrintSpy();

		mockQuestions(inputs);
		mockRandoms(randomNumbers);

		const racingcarGame = new RacingcarGame();
		racingcarGame.cars = (await racingcarGame.getNamesOfCars()).map(
			(name) => new Car(name),
		);
		racingcarGame.numberOfAttempts = await racingcarGame.getNumberOfAttempts();
		racingcarGame.raceStart();
		racingcarGame.printResult();

		outputs.forEach((output) => {
			expect(printSpy).toHaveBeenCalledWith(output);
		});
	});

	test("numberOfAttempts = 5, numberOfCars = 3", async () => {
		const inputs = ["pobi,woni,jun", "5"];
		const randomNumbers = [4, 3, 5, 3, 0, 9, 5, 7, 8, 2, 6, 1, 1, 3, 6];
		const outputs = [
			"\n실행 결과",
			"pobi : -",
			"woni : ",
			"jun : -",
			"pobi : -",
			"woni : ",
			"jun : --",
			"pobi : --",
			"woni : -",
			"jun : ---",
			"pobi : --",
			"woni : --",
			"jun : ---",
			"pobi : --",
			"woni : --",
			"jun : ----",
		];
		const printSpy = getPrintSpy();

		mockQuestions(inputs);
		mockRandoms(randomNumbers);

		const racingcarGame = new RacingcarGame();
		racingcarGame.cars = (await racingcarGame.getNamesOfCars()).map(
			(name) => new Car(name),
		);
		racingcarGame.numberOfAttempts = await racingcarGame.getNumberOfAttempts();
		racingcarGame.raceStart();
		racingcarGame.printResult();

		outputs.forEach((output) => {
			expect(printSpy).toHaveBeenCalledWith(output);
		});
	});
});
