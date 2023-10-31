import { MissionUtils } from "@woowacourse/mission-utils";
import GetCarNamesFromUser from "./GetCarNamesFromUser";
import GetAttemptsFromUser from "./getAttemptsFromUser";
import GetResults from "./GetResults";
import { GET_ATTEMPT_MESSAGE } from "./constants";

class App {
	async play() {
		const cars = await GetCarNamesFromUser();
		await MissionUtils.Console.print(GET_ATTEMPT_MESSAGE);
		const attempts = await GetAttemptsFromUser();
		await GetResults(cars, attempts);
	}
}

export default App;
