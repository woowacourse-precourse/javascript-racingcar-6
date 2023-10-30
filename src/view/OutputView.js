import { Console } from '@woowacourse/mission-utils';

const OutputView =  {
	outputWinnerName: (winnerName) => {
		Console.print(winnerName);
	},
	outputDistanceCars: (distanceimformation) => {
		Console.print(distanceimformation);
	},
    outputErrorMessage: (errorMessage) => {
        Console.print(errorMessage);
    }
}

export default OutputView;