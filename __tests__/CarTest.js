import Car from "../src/Car.js";
import { mockQuestions, mockRandoms } from "./ApplicationTest.js";
//사용자 입력값
//mockRandoms함수는 인자값으로 넘겨받은 numbers 배열의 요소들로 pickUniqueNumbersInRange 함수의 리턴값을 대체하는 역할을 수행한다.

describe("Car", () => {
	const car = new Car("car1");
	const canMoveStepSpy = jest.spyOn(car, "canMoveStep");

	describe(".canMoveStep()", () => {
		test("defines a function", () => {
			const MOVING_FORWARD = 5;
			const STOP = 2;
			const randoms = [MOVING_FORWARD, STOP];

			mockRandoms([...randoms]);
			expect(car.canMoveStep()).toBe("object");
		});
	});
});
