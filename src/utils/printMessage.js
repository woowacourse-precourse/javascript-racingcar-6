import { Console } from "@woowacourse/mission-utils";
import { MESSAGE } from "../Constants.js";

const msg = MESSAGE.inputCars;
const trymsg = MESSAGE.tryNum;

const printMessage = async (message) => {
	const inputValue = await Console.readLineAsync(message);
	if (message === msg) {
		const cars = inputValue.split(",");
		console.log(cars);
	} else {
		const tryNum = inputValue;
		console.log(tryNum);
	}
	//예외 경우
	//1.쉼표로 구분하지 않았을 경우(쉼표가없을경우)
	//2.차를 1개 이하 입력
	// if (cars.length < 2) throw "자동차는 최소 2개 이상 입력해 주세요";
};

// printMessage(msg);
// printMessage(trymsg);
