import { Console } from "@woowacourse/mission-utils";

class OutputView {
	static printCars(names, distances) {
		for (var i = 0; i < names.length; i++) {
			Console.print(`${names[i]} : ${'-'.repeat(distances[i])}`);
		}
		Console.print('');
	}

	static printWinners(winners) {
		Console.print(`최종 우승자 : ${winners.join(", ")}`);
	}
}

export default OutputView;