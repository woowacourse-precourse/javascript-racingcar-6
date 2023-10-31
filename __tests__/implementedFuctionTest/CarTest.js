import Car from '../../src/racing/Car.js';
import { MissionUtils } from '@woowacourse/mission-utils';

const mockRandoms = (numbers) => {
	MissionUtils.Random.pickNumberInRange = jest.fn();
	numbers.reduce((acc, number) => {
		return acc.mockReturnValueOnce(number);
	}, MissionUtils.Random.pickNumberInRange);
};

describe('Car 클래스 테스트', () => {
	test('초기 상태에서 1칸 이동 후 carState 확인', () => {
		// given
		mockRandoms([4, 5, 6, 7, 8, 9]);
		const car = new Car('name', 0);
		
		// when
		car.tryMoveForward();
		const result = { name: 'name', forwardCount: 1 };
		
		// then
		expect(car.getCarState()).toEqual(result);
	});

	test('초기 상태에서 3번 이동 시도 후 전진하지 못했을 때의 forwardCount', () => {
		// given
		mockRandoms([0, 1, 2, 3]);
		const car = new Car('name', 0);
		
		// when
		car.tryMoveForward();
		car.tryMoveForward();
		car.tryMoveForward();

		// then
		expect(car.getCarState().forwardCount).toBe(0);
	});

	test('초기 상태에서 3번 이동 시도 후 세칸 전진하였을 때의 forwardCount', () => {
		// given
		mockRandoms([4, 5, 6, 7, 8, 9]);
		const car = new Car('name', 0);
		
		// when
		car.tryMoveForward();
		car.tryMoveForward();
		car.tryMoveForward();
		
		// then
		expect(car.getCarState().forwardCount).toBe(3);
	});
});
