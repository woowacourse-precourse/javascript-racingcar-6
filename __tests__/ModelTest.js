import RacingCar from '../src/Model/RacingCar';
import { Console } from '@woowacourse/mission-utils';

const getLogSpy = () => {
	const logSpy = jest.spyOn(Console, 'print');
	logSpy.mockClear();
	return logSpy;
};

describe('레이싱 카 테스트', () => {
	test('레이싱 카들은 이름을 가진다', () => {
		// given
		const CAR_NAME_SUCCESS = 'car1';
		const CAR_NAME_FAIL = 'car2';

		// when
		const car = new RacingCar(CAR_NAME_SUCCESS);

		// then
		expect(car.name).toMatch(CAR_NAME_SUCCESS);
		expect(car.name).not.toMatch(CAR_NAME_FAIL);
	});

	test('레이싱 카는 전진할 수 있다.', () => {
		// given
		const CAR_NAME_SUCCESS = 'car1';

		// when
		const car = new RacingCar('car1');

		//then
		expect(car.distance).toEqual(0);

		car.go();

		expect(car.distance).toEqual(1);
		expect(car.distance).not.toBeGreaterThanOrEqual(2);
		expect(car.distance).not.toBeLessThanOrEqual(0);
	});

	test('레이싱 카는 현재 위치리를 표시할 수 있다.', () => {
		// given
		const logSpy = getLogSpy();
		const car = new RacingCar('car1');

		// when
		car.go();
		car.showCarPosition();

		// then
		expect(logSpy).toHaveBeenCalledWith(expect.stringMatching('car1 : -'));
		expect(logSpy).toHaveBeenCalledWith(expect.not.stringMatching('car1 : --'));
		expect(logSpy).toHaveBeenCalledWith(expect.not.stringMatching('car2 : -'));
	});
});
