import { MissionUtils } from "@woowacourse/mission-utils";
import Message from "../constants/constants";

async function GetAttemptsFromUser() {
	const attempts = await MissionUtils.Console.readLineAsync();

	if (!isNaN(attempts)) {
		MissionUtils.Console.print(Number(attempts));
	} else {
		throw new Error(Message.ATTEMPT_NUMBER_ERROR);
	}

	return Number(attempts);
}

export default GetAttemptsFromUser;
