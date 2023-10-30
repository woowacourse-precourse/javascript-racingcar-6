import { readLineAsync } from "../utils/missionUtils.js";
import { READ_LINE_QUERY } from "../constants/message.js";
import validateNamesOfCars from "../validates/validateNamesOfCars.js";

class RacingcarGame {
	async gameStart() {
		await this.getNamesOfCars();
	}

	async getNamesOfCars() {
		const result = (await readLineAsync(READ_LINE_QUERY.namesOfCars)).split(
			",",
		);

		validateNamesOfCars(result);

		return result;
	}
}

export default RacingcarGame;
