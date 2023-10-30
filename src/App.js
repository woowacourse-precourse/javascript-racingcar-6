import { Console } from "@woowacourse/mission-utils";
import { MESSAGE } from "./Constants.js";
import Car from "./Car.js";

class App {
	async play() {
		const { carList, tryNum } = await this.setInitialValue();

		this.startRacing(carList, tryNum);
		this.getWinner(carList);
	}

	async setInitialValue() {
		let carList = [];
		const carNames = await Console.readLineAsync(MESSAGE.inputCars);
		const tryNum = await Console.readLineAsync(MESSAGE.tryNum);
		const cars = carNames.split(",");

		cars.forEach((car) => {
			carList.push(new Car(car));
		});

		return { carList, tryNum };
	}

	startRacing(carList, tryNum) {
		Console.print(MESSAGE.result);
		for (let i = 0; i < tryNum; i++) {
			carList.forEach((car) => {
				car.canMoveStep().printCarStpes;
			});
			Console.print(MESSAGE.newLine);
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

		Console.print(`${MESSAGE.winner}${winnerList.join(", ")}`);
	}
}

export default App;
