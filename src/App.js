import { Console, Random } from '@woowacourse/mission-utils';
import InputCarName from './InputCarName.js';
import InputAttempt from './InputAttempt.js';
import MoveForward from './MoveForward.js';
import { executionResult, winnerResult } from './OutputResult.js';

class App {
	async play() {
		const carList = await InputCarName();
		console.log(carList.length);
		// const carList = ['pobi', 'woni', 'jun'];
		const attemptNumber = await InputAttempt();
		const forwardCount = [...carList].map((x) => 0);

		Console.print('\n실행 결과');
		for (let i = 0; i < attemptNumber; i++) {
			executionResult(carList, forwardCount);
		}
		// console.log('ㅎㅇ', forwardCount);
		// console.log('result', carList);
		const winner = this.findWinner(carList);
		winnerResult();
	}
	findWinner(carList) {}
}

export default App;
