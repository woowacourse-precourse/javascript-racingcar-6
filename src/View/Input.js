import { MissionUtils } from '@woowacourse/mission-utils';

export default class Input {
	async readInput(question) {
		return await MissionUtils.Console.readLineAsync(question);
	};
};
