import { Console } from '@woowacourse/mission-utils';
import InputCarName from './InputCarName.js';
import InputAttempt from './InputAttempt.js';
import { racingResult, winnerResult } from './OutputResult.js';

class App {
	async play() {
		const carList = await InputCarName();
		const attemptNumber = await InputAttempt();
		const forwardCount = [...carList].map((x) => 0);

		Console.print('\n실행 결과');
		for (let i = 0; i < attemptNumber; i++) {
			racingResult(carList, forwardCount);
		}
		const winner = this.findWinner(carList, forwardCount);
		winnerResult(winner);
	}

	findWinner(carList, forwardCount) {
		const winnerList = [];
		const MAX_COUNT = Math.max(...forwardCount);

		forwardCount.forEach((count, idx) => {
			if (count === MAX_COUNT) {
				const winnerCarName = carList[idx].substr(0, carList[idx].indexOf(' '));
				winnerList.push(winnerCarName);
			}
		});
		return winnerList;
	}
}

export default App;
