import { MissionUtils } from "@woowacourse/mission-utils";
import GetCarNamesFromUser from "./getCarNames/GetCarNamesFromUser";
import GetAttemptsFromUser from "./getAttempts/GetAttemptsFromUser";
import GetResults from "./getResults/GetResults";
import Message from "./constants/constants";

class App {
	async play() {
		const cars = await GetCarNamesFromUser();
		await MissionUtils.Console.print(Message.GET_ATTEMPT_MESSAGE);
		const attempts = await GetAttemptsFromUser();
		await GetResults(cars, attempts);
	}
}

export default App;
