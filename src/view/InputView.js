import { Console } from '@woowacourse/mission-utils';
import validateUserInput from '../Utils/Validator';
import { CARNAME_REQUEST_MESSAGE } from '../Utils/Define';

const InputView = async () => {
  const userInput = await Console.readLineAsync(CARNAME_REQUEST_MESSAGE);
  const cars = userInput.split(',');
  cars.forEach((car) => {
    validateUserInput(car);
  });
  return cars;
};

export default InputView;
