import { MissionUtils } from "@woowacourse/mission-utils";

class App {
	async play() {
		const cars = await this.getCarNamesFromUser();
		await MissionUtils.Console.print("시도할 횟수는 몇 회인가요?");
		const attempts = await this.getAttemptsFromUser();
		await this.getResults(cars, attempts);
	}

	async getCarNamesFromUser() {
		const userInputCar = await MissionUtils.Console.readLineAsync();
		await MissionUtils.Console.print(
			"경주할 자동차 이름을 입력하세요 (5자 이하): "
		);
		const cars = userInputCar.split(",");

		cars.map((carName) => {
			if (carName.length > 5) {
				MissionUtils.Console.print(String(cars));
				throw new Error(
					"[ERROR] 자동차 이름이 잘못된 형식입니다. (5자 이하만 가능)"
				);
			}
		});

		MissionUtils.Console.print(String(cars));

		return cars;
	}

	async getAttemptsFromUser() {
		const attempts = await MissionUtils.Console.readLineAsync();

		if (!isNaN(attempts)) {
			MissionUtils.Console.print(Number(attempts));
		} else {
			throw new Error("[ERROR]");
		}

		return Number(attempts);
	}

	async getResults(cars, attempts) {
		let results = [];
		let maxHyphenCount = -1;
		const winners = [];

		for (let i = 0; i < cars.length; i++) {
			let steps = "";
			for (let j = 0; j < attempts; j++) {
				const move = MissionUtils.Random.pickNumberInRange(0, 9);
				if (move >= 4) {
					steps += "-";
				}
			}

			const hyphenCount = (steps.match(/\-/g) || []).length;
			results.push(cars[i] + " : " + steps);

			if (hyphenCount > maxHyphenCount) {
				maxHyphenCount = hyphenCount;
				winners.length = 0;
				winners.push(cars[i]);
			} else if (hyphenCount === maxHyphenCount) {
				winners.push(cars[i]);
			}
		}

		for (const result of results) {
			await MissionUtils.Console.print(result);
		}

		console.log("최종 우승자 : " + winners.join(", "));
	}
}

export default App;
