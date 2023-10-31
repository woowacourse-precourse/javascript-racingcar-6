import { MissionUtils } from '@woowacourse/mission-utils';
import Car from '../src/model/Car.js';

const mockRandoms = (numbers) => {
	MissionUtils.Random.pickNumberInRange = jest.fn();
	numbers.reduce((acc, number) => {
		return acc.mockReturnValueOnce(number);
	}, MissionUtils.Random.pickNumberInRange);
};

test('자동차 전진 테스트', () => {
	const randomNumbers = [3, 5, 0, 6];

	mockRandoms(randomNumbers);

	const car = new Car('테스트카');

	car.forward();
	expect(car.distance).toBe(0);

	car.forward();
	expect(car.distance).toBe(1);

	car.forward();
	expect(car.distance).toBe(1);

	car.forward();
	expect(car.distance).toBe(2);
});
