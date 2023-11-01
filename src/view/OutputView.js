import { Console } from '@woowacourse/mission-utils';
import OUTPUTMESSAGE from '../constant/OutPutMessage';

const OutputView = {
  outputWinnerName: (winnerName) => Console.print(`${OUTPUTMESSAGE.GAME_END_MESSAGE}${winnerName}`),
  outputDistanceCar: (distanceimformation) => Console.print(distanceimformation),
  outputErrorMessage: (errorMessage) => Console.print(errorMessage),
};

export default OutputView;
