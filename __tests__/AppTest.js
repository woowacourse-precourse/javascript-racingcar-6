import App from '../src/App.js';
import { Console } from '@woowacourse/mission-utils';

const mockQuestions = (inputs) => {
	Console.readLineAsync = jest.fn();

	Console.readLineAsync.mockImplementation(() => {
		const input = inputs.shift();
		return Promise.resolve(input);
	});
};

test('입력 받은 자동차의 이름이 5자가 넘을 경우 에러를 표시한다.', async () => {
	// given
	const inputs = ['a,bb,ccccc'];

	mockQuestions(inputs);

	// when
	const app = new App();

	// then
	await expect(app.play()).rejects.toThrow('[ERROR]');
});

test('입력 받은 자동차의 이름에 따라 자동차 인스턴스 배열이 생성된다.', () => {
	const inputs = 'car1,car2';

	const app = new App();
	app.enrollRacingCar(inputs);

	app.carArray.forEach((car, index) => {
		expect(car.name).toEqual(resultSample[index]);
	});
});

test('입력 받은 이동 횟수가 숫자가 이닌경우 에러를 표시한다.', async () => {
	// given
	const inputs = ['a,bb,ccccc', 'a'];

	mockQuestions(inputs);

	// when
	const app = new App();

	// then
	await expect(app.play()).rejects.toThrow('[ERROR]');
});
