import { MissionUtils } from "@woowacourse/mission-utils";
import Message from "../constants/constants";

async function GetCarNamesFromUser() {
	const userInputCar = await MissionUtils.Console.readLineAsync();
	await MissionUtils.Console.print(Message.GET_CARS_MESSAGE);
	const cars = userInputCar.split(",");

	cars.map((carName) => {
		if (carName.length > 5) {
			MissionUtils.Console.print(String(cars));
			throw new Error(Message.CARNAME_ERROR);
		}
	});

	MissionUtils.Console.print(String(cars));

	return cars;
}

export default GetCarNamesFromUser;
