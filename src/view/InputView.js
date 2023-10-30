import { Console } from '@woowacourse/mission-utils';

const InputView =  {
	inputCarName: async () => {
		let carNames = await Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)");

		return (carNames);
	},
	inputRepeatCount: async () => {
		const repeatCount = await Console.readLineAsync("시도할 횟수는 몇 회인가요?");

		return (repeatCount);
	}
}

export default InputView;