import { Console } from "@woowacourse/mission-utils";
import { getLines } from "../utils/getLines.js";

class OutputView {
	static printCars(names, distances) {
		for (var i = 0; i < names.length; i++) {
			const lines = getLines(distances[i]);
			Console.print(`${names[i]} : ${lines}`);
		}
		Console.print('');
	}

	static printWinners(winners) {
		Console.print(`최종 우승자 : ${winners.join(", ")}`);
	}
}

export default OutputView;