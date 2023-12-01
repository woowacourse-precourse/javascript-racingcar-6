import { Console } from "@woowacourse/mission-utils";
import { CONSOLE_MESSAGE } from "./Constants.js";
import Car from "./Car.js";
import { carNameCheck, tryNumCheck } from "./utils/validationCheck.js";

class App {
	async play() {
		const { carList, tryNum } = await this.setInitialValue();
		this.startRacing(carList, tryNum);
		this.getWinner(carList);
	}

	async setInitialValue() {
		let carList = [];
		const carNames = await Console.readLineAsync(CONSOLE_MESSAGE.inputCars);
		const cars = carNames.split(",");
		carNameCheck(cars);

		const tryNum = await Console.readLineAsync(CONSOLE_MESSAGE.tryNum);
		tryNumCheck(tryNum);

		cars.forEach((car) => {
			carList.push(new Car(car));
		});

		return { carList, tryNum };
	}

	startRacing(carList, tryNum) {
		Console.print(CONSOLE_MESSAGE.result);

		for (let i = 0; i < tryNum; i++) {
			carList.forEach((car) => {
				car.canMoveStep().printCarStpes;
			});
			Console.print(CONSOLE_MESSAGE.newLine);
		}
	}

	getWinner(carList) {
		let carStepsList = [];
		carList.forEach((car) => {
			carStepsList.push(car.steps.length);
		});

		const max = Math.max(...carStepsList);

		const winnerList = carList.reduce((arr, car) => {
			car.steps.length === max && arr.push(car.name);
			return arr;
		}, []);

		Console.print(`${CONSOLE_MESSAGE.winner}${winnerList.join(", ")}`);
	}
}

export default App;
