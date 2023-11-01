import {
  CARNAME_REQUEST_MESSAGE,
  COUNT_REQUEST_MESSAGE,
  EACH_ROUND_RESULT,
} from '../Utils/Define';
import InputView from './InputView';
import { validatorCarName, validatorGameRound } from '../Utils/Validator';
import OutputView from './OutputView';
// import { validateGameRound } from '../Errors/InputErrors';

const userInput = async () => {
  const carsName = await InputView(CARNAME_REQUEST_MESSAGE);
  const carsNames = carsName.split(',');
  carsNames.forEach((carName) => {
    validatorCarName(carName);
  });

  const gameRound = await InputView(COUNT_REQUEST_MESSAGE);
  validatorGameRound(gameRound);
  return [carsNames, gameRound];
};

const resultOutput = async (cars) => {
  await OutputView(EACH_ROUND_RESULT, cars);
};

export { userInput, resultOutput };
