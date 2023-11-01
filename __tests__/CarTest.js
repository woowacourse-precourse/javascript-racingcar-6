/* eslint-disable no-undef */

import { MissionUtils } from "@woowacourse/mission-utils";
import Car from "../src/RacingcarGame/Car.js";

const mockRandoms = (numbers) => {
	MissionUtils.Random.pickNumberInRange = jest.fn();

	numbers.forEach((number) => {
		MissionUtils.Random.pickNumberInRange.mockReturnValueOnce(number);
	});
};

describe("자동차 클래스 테스트 ", () => {
	test("(자동차 이름) pobi, woni, jun", () => {
		const names = ["pobi", "woni", "jun"];

		const cars = names.map((name) => new Car(name));

		expect(cars.map((car) => car.getName())).toEqual(names);
	});

	test("(이동 거리) numberOfAttempts = 1, numberOfCars = 1", () => {
		const RANDOM_NUMBERS = [4];
		const RESULT = 1;
		const name = "pobi";

		mockRandoms(RANDOM_NUMBERS);

		const car = new Car(name);
		car.move(0);
		const movingDistance = car.getMovingDistance(0);

		expect(movingDistance).toEqual(RESULT);
	});

	test("(이동 거리) numberOfAttempts = 1, numberOfCars = 3", () => {
		const RANDOM_NUMBERS = [4, 3, 5];
		const RESULT = [1, 0, 1];
		const names = ["pobi", "woni", "jun"];

		mockRandoms(RANDOM_NUMBERS);

		const cars = names.map((name) => new Car(name));
		cars.forEach((car) => car.move(0));
		const movingDistances = cars.map((car) => car.getMovingDistance(0));

		expect(movingDistances).toEqual(RESULT);
	});

	test("(이동 거리) numberOfAttempts = 5, numberOfCars = 1", () => {
		const RANDOM_NUMBERS = [4, 3, 5, 9, 0];
		const RESULT = [1, 1, 2, 3, 3];
		const name = "pobi";
		const numberOfAttempts = 5;

		mockRandoms(RANDOM_NUMBERS);

		const car = new Car(name);

		for (let round = 0; round < numberOfAttempts; round += 1) {
			car.move(round);
		}

		const movingDistances = [];
		for (let round = 0; round < numberOfAttempts; round += 1) {
			movingDistances.push(car.getMovingDistance(round));
		}

		expect(movingDistances).toEqual(RESULT);
	});

	test("(이동 거리) numberOfAttempts = 5, numberOfCars = 3", () => {
		// round -> car
		// round * car
		// car car car * round

		const names = ["pobi", "woni", "jun"];
		const RANDOM_NUMBERS = [
			[4, 3, 5],
			[3, 0, 9],
			[5, 7, 8],
			[2, 6, 1],
			[1, 3, 6],
		];
		const RESULT = [2, 2, 4];
		const numberOfAttempts = 5;

		mockRandoms(RANDOM_NUMBERS.reduce((acc, cur) => [...acc, ...cur], []));

		const cars = names.map((name) => new Car(name));

		for (let round = 0; round < numberOfAttempts; round += 1) {
			cars.forEach((car) => car.move(round));
		}

		const movingDistances = cars.map((car) =>
			car.getMovingDistance(numberOfAttempts - 1),
		);

		expect(movingDistances).toEqual(RESULT);
	});
});
