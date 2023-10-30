import { Console } from '@woowacourse/mission-utils';

const OutputView =  {
	outputWinnerName: (winnerName) => {
		Console.print(winnerName);
	},
	outputDistanceCars: (distanceimformation) => {
		Console.print(distanceimformation);
	}
}

export default OutputView;