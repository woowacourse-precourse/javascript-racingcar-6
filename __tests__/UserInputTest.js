import { MissionUtils } from '@woowacourse/mission-utils';
import UserInput from '../src/view/UserInput';
import ERROR_MESSAGES from '../src/constants/ErrorMessages';

const mockQuestions = (input) => {
	MissionUtils.Console.readLineAsync = jest.fn();

	MissionUtils.Console.readLineAsync.mockImplementation(() => {
		return Promise.resolve(input);
	});
};

describe('사용자의 자동차 이름 입력값 에러처리 테스트', () => {
	const runErrorTest = async (input, errorMsg) => {
		mockQuestions(input);

		const userInput = new UserInput();
		const inputVal = userInput.inputRacingCarName();

		await expect(inputVal).rejects.toThrow(errorMsg);
	};

	test.each(['tobiwoni', 'tobi, woni, tobiwoni', 'to   bi  '])(
		'자동차 이름이 최대 글자수를 넘어가는 경우',
		async (input) => {
			await runErrorTest(input, ERROR_MESSAGES.car_name_exceeds_maximum_digits);
		}
	);

	test.each(['', 'tobi, woni,'])('자동차 이름이 없는 경우', async (input) => {
		await runErrorTest(input, ERROR_MESSAGES.car_has_no_name);
	});

	test.each(
		['\tobi/', '//\\', 'to\bi'],
		('자동차 이름에 이스케이프 시퀀스가 들어있는 경우',
		async (input) => {
			await runErrorTest(input, ERROR_MESSAGES.use_escape_sequence);
		})
	);

	test.each(['tobi, woni, tobi', 'tobi, tobi '])(
		'중복된 자동차 이름이 있는 경우',
		async (input) => {
			await runErrorTest(input, ERROR_MESSAGES.duplicate_car_name);
		}
	);

	test.each(['', 'tobi, woni,'])('자동차 이름이 없는 경우', async (input) => {
		await runErrorTest(input, ERROR_MESSAGES.car_has_no_name);
	});

	test('자동차 최대 갯수를 넘은 경우', async () => {
		const names = Array.from({ length: 101 }, (_, i) => `t${i + 1}`);
		const input = names.join(', ');

		await runErrorTest(input, ERROR_MESSAGES.exceed_maximum_car_number);
	});
});
