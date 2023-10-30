import { Console } from "@woowacourse/mission-utils";
import { MESSAGE } from "./Constants.js";
import Car from "./Car.js";

class App {
	async play() {
		const { carList, tryNum } = await this.setInitialValue();
		let carStepsList = [];

		//레이싱 시작
		Console.print("\n실행 결과"); //나중에 상수로 바꾸자
		for (let i = 0; i < tryNum; i++) {
			carList.forEach((car) => {
				car.canMoveStep().printCarStpes;
			});
			Console.print("\n");
		}

		//얼마나 갔는지?
		carList.forEach((car) => {
			carStepsList.push(car.steps.length);
		});
		console.log("list:", carStepsList);

		const max = Math.max(...carStepsList);
		console.log("max:", max);

		let k = carList.reduce((arr, car) => {
			if (car.steps.length === max) {
				arr.push(car.name);
				console.log("arr:", arr);
			}
			return arr;
		}, []);

		console.log("최종 우승 :", k.join(", "));
		//예외 경우
		//1.쉼표로 구분하지 않았을 경우(쉼표가없을경우)
		//2.차를 1개 이하 입력
		// if (cars.length < 2) throw "자동차는 최소 2개 이상 입력해 주세요";
	}

	async setInitialValue() {
		let carList = [];
		const carNames = await Console.readLineAsync(MESSAGE.inputCars);
		const tryNum = await Console.readLineAsync(MESSAGE.tryNum);
		const cars = carNames.split(",");

		//객체생성
		cars.forEach((car) => {
			carList.push(new Car(car));
		});

		return { carList, tryNum };
	}
}

export default App;
