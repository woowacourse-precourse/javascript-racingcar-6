import { Console, Random } from '@woowacourse/mission-utils';
import InputCarName from './InputCarName.js';
import InputAttempt from './InputAttempt.js';
import MoveForward from './MoveForward.js';
import { executionResult, winnerResult } from './OutputResult.js';

class App {
	async play() {
		const carList = await InputCarName();
		// const carList = ['pobi', 'woni', 'jun'];
		const attemptNumber = await InputAttempt();
		Console.print('\n실행 결과');
		for (let i = 0; i < attemptNumber; i++) {
			executionResult(carList);
		}
		// console.log('result', carList);
		const winner = this.findWinner(carList);
		winnerResult();
	}
	findWinner(carList) {}
}

export default App;
