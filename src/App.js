import { MissionUtils } from "@woowacourse/mission-utils";

class App {
	constructor() {
		this.cars = [];
	}

	async play() {
		await this.getCarNamesFromUser();
	}

	async getCarNamesFromUser() {
		const userInputCar = await MissionUtils.Console.readLineAsync();
		await MissionUtils.Console.print(
			"경주할 자동차 이름을 입력하세요 (5자 이하): "
		);
		this.cars = userInputCar.split(",");

		MissionUtils.Console.print(String(this.cars));

		return this.cars;
	}
}

export default App;
