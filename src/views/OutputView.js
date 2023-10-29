import { Console } from "@woowacourse/mission-utils";

class OutputView {
	static getLines(distance) {
		let lines = '';
		for (var i = 0; i < distance; i++)
			lines += '-';

		return lines;
	}

	static printCars(names, distances) {
		for (var i = 0; i < names.length; i++) {
			const lines = this.getLines(distances[i]);
			Console.print(`${names[i]} : ${lines}`);
		}
		Console.print('');
	}

	static printWinners(winners) {
		Console.print(`최종 우승자 : ${winners.join(", ")}`);
	}
}

export default OutputView;