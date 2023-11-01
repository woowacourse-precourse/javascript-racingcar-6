import Car from '../src/model/Car.js';
import RacingJudge from '../src/model/RacingJudge.js';

describe('모델 테스트', () => {
	test('레이싱 저지가 오름차순으로 우승자 목록을 출력하는지 테스트', () => {
		const driverNames = ['한현', '두현', '세현', '네현'];

		const testDriverAndLocations = driverNames.map((name) => {
			const car = new Car(name);
			car.location = 24;

			return car;
		});

		const judge = new RacingJudge();
		const winners = judge.getWinnerNames(testDriverAndLocations);

		console.log(winners);
		expect(winners).toEqual(['네현', '두현', '세현', '한현']);
	});
});
