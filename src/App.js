import { MissionUtils } from "@woowacourse/mission-utils";

class App {
	constructor() {
		this.cars = [];
	}

	async play() {
		await this.getCarNamesFromUser();
		await MissionUtils.Console.print("시도할 횟수는 몇 회인가요?");
	}

	async getCarNamesFromUser() {
		const userInputCar = await MissionUtils.Console.readLineAsync();
		await MissionUtils.Console.print(
			"경주할 자동차 이름을 입력하세요 (5자 이하): "
		);
		this.cars = userInputCar.split(",");

		this.cars.map((carName) => {
			if (carName.length > 5) {
				MissionUtils.Console.print(String(this.cars));
				throw new Error(
					"[ERROR] 자동차 이름이 잘못된 형식입니다. (5자 이하만 가능)"
				);
			}
		});

		MissionUtils.Console.print(String(this.cars));

		return this.cars;
	}
}

export default App;
