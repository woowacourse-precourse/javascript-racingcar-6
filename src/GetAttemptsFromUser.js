import { MissionUtils } from "@woowacourse/mission-utils";
import { ATTEMPT_NUMBER_ERROR } from "./constants";

async function GetAttemptsFromUser() {
	const attempts = await MissionUtils.Console.readLineAsync();

	if (!isNaN(attempts)) {
		MissionUtils.Console.print(Number(attempts));
	} else {
		throw new Error(ATTEMPT_NUMBER_ERROR);
	}

	return Number(attempts);
}

export default GetAttemptsFromUser;
