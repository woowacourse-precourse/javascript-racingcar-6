import RacingCar from '../src/Model/RacingCar';
import { Console } from '@woowacourse/mission-utils';

const getLogSpy = () => {
	const logSpy = jest.spyOn(Console, 'print');
	logSpy.mockClear();
	return logSpy;
};

describe('레이싱 카 테스트', () => {
	test('자동차들은 이름을 가진다', () => {
		const car = new RacingCar('car1');

		expect(car.name).toEqual('car1');
	});

	test('레이싱 카는 전진할 수 있다.', () => {
		const car = new RacingCar('car1');

		expect(car.distance).toEqual(0);

		car.go();

		expect(car.distance).toEqual(1);
	});

	test('레이싱 카는 현재 위치리를 보여줄 수 있다.', () => {
		const logSpy = getLogSpy();
		const car = new RacingCar('car1');

		car.go();
		car.showCarPosition();

		expect(logSpy).toHaveBeenCalledWith(expect.stringMatching('car1 : -'));
	});
});
