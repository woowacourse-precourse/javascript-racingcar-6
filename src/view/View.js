import {
  CARNAME_REQUEST_MESSAGE,
  COUNT_REQUEST_MESSAGE,
} from '../Utils/Define';
import InputView from './InputView';

const userInput = async () => {
  const carsName = await InputView(CARNAME_REQUEST_MESSAGE);
  const gameRound = await InputView(COUNT_REQUEST_MESSAGE).then((result) =>
    result.join(''),
  );
  return [...carsName, gameRound];
};

export default userInput;
