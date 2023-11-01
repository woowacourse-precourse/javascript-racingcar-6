import { Console } from '@woowacourse/mission-utils';

class IOManager {
	// 사용자 입력을 받는 함수
	static getUserInput = async (message, validateFunction) => {
		const userInput = await Console.readLineAsync(message);
		validateFunction(userInput);
		return userInput;
	};

	// 콘솔 출력 함수
	static printMessage = (message) => {
		Console.print(message.trim());
	};
}

export default IOManager;
