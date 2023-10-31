import { MissionUtils } from "@woowacourse/mission-utils";
import { GET_CARS_MESSAGE, CARNAME_ERROR } from "./constants";

async function GetCarNamesFromUser() {
	const userInputCar = await MissionUtils.Console.readLineAsync();
	await MissionUtils.Console.print(GET_CARS_MESSAGE);
	const cars = userInputCar.split(",");

	cars.map((carName) => {
		if (carName.length > 5) {
			MissionUtils.Console.print(String(cars));
			throw new Error(CARNAME_ERROR);
		}
	});

	MissionUtils.Console.print(String(cars));

	return cars;
}

export default GetCarNamesFromUser;
