import { MissionUtils } from "@woowacourse/mission-utils";

const racingcarView  = {
	displayMessage(message) {
			MissionUtils.Console.print(message);
	},

	async getUserInput(message) {
		const input = await MissionUtils.Console.readLineAsync(message);
		return input;
	},
}

export default racingcarView;