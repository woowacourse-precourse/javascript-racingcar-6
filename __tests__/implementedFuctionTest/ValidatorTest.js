import CarsNameValidator from '../../src/validator/CarsNameValidator.js';
import RoundsCountValidator from '../../src/validator/RoundsCountValidator.js';
import errorMessage from '../../src/constants/errorMessage.js';
import { MissionUtils } from '@woowacourse/mission-utils';
import App from '../../src/App.js';

const mockQuestions = (inputs) => {
	MissionUtils.Console.readLineAsync = jest.fn();

	MissionUtils.Console.readLineAsync.mockImplementation(() => {
		const input = inputs.shift();
		return Promise.resolve(input);
	});
};

describe('CarsNameValidator 테스트', () => {
	test('carsName에 빈 문자열이 전달 되었을 때 error', async () => {
		// given
		const input = [''];
		await mockQuestions(input);

		// when
		const app = new App();

		// then
		await expect(app.play()).rejects.toThrow(errorMessage.EMPTY_STRING);		
	});

	test('carsName의 콤마 안에 공백이 포함되면(이름이 지정되지 않으면) error', async () => {
		// given
		const input = ['A,B,,C'];
		await mockQuestions(input);

		// when
		const app = new App();

		// then
		await expect(app.play()).rejects.toThrow(errorMessage.CAR_NAME_NOT_SET);		
	});

	test('6자 이상의 이름이 포함되면 error', async () => {
		// given
		const input = ['A,B,C,ABCDEFG'];
		await mockQuestions(input);

		// when
		const app = new App();

		// then
		await expect(app.play()).rejects.toThrow(errorMessage.EXCEEDED_LENGTH);		
	});

	test('중복된 이름이 존재하면 error', async () => {
		// given
		const input = ['ABC,DEF,ABC'];
		await mockQuestions(input);

		// when
		const app = new App();

		// then
		await expect(app.play()).rejects.toThrow(errorMessage.DUPLICATED_NAME);		
	});
});
