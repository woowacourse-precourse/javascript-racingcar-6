import { Console, Random } from '@woowacourse/mission-utils';
import InputCarName from './InputCarName.js';
import InputAttempt from './InputAttempt.js';
import MoveForward from './MoveForward.js';
import { executionResult, winnerResult } from './OutputResult.js';

class App {
	async play() {
		const carList = await InputCarName();
		console.log(carList.length);
		const attemptNumber = await InputAttempt();
		const forwardCount = [...carList].map((x) => 0);
		Console.print('\n실행 결과');
		for (let i = 0; i < attemptNumber; i++) {
			executionResult(carList, forwardCount);
		}
		const winner = this.findWinner(carList, forwardCount);
		console.log(winner);
		winnerResult(winner);
	}
	findWinner(carList, forwardCount) {
		const winnerList = [];
		const MAXCOUNT = Math.max(...forwardCount);
		forwardCount.forEach((count, idx) => {
			if (count === MAXCOUNT) {
				const winnerCarName = carList[idx].substr(0, carList[idx].indexOf(' '));
				winnerList.push(winnerCarName);
			}
		});
		return winnerList;
	}
}

export default App;
