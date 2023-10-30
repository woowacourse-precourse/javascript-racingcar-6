import RacingCar from '../src/Model/RacingCar';

describe('레이싱 카 테스트', () => {
	test('자동차들은 이름을 가진다', () => {
		const car = new RacingCar('car1');

		expect(car.name).toEqual('car1');
	});

	test('레이싱 카는 전진할 수 있다.', () => {
		const car = new RacingCar('car1');

		expect(car.distance).toEqual('');

		car.go();

		expect(car.distance).toEqual('-');
	});
});
