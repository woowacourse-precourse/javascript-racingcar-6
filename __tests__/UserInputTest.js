import { MissionUtils } from '@woowacourse/mission-utils';
import UserInput from '../src/view/UserInput';
import ERROR_MESSAGES from '../src/constants/ErrorMessages';

const mockQuestions = (input) => {
	MissionUtils.Console.readLineAsync = jest.fn();

	MissionUtils.Console.readLineAsync.mockImplementation(() => {
		return Promise.resolve(input);
	});
};

describe('사용자 입력값 에러처리 테스트', () => {
	test.each(['tobiwoni', 'tobi, woni, tobiwoni'])(
		'자동차 이름이 최대 글자수를 넘어가는 경우',
		async (input) => {
			mockQuestions(input);

			const userInput = new UserInput();
			const inputVal = userInput.inputRacingCarName();

			await expect(inputVal).rejects.toThrow(ERROR_MESSAGES.car_name_exceeds_maximum_digits);
		}
	);
});
