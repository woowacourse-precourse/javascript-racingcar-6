import { Console } from '@woowacourse/mission-utils';
import validateUserInput from '../Utils/Validator';

const InputView = async (message) => {
  const userInput = await Console.readLineAsync(message);
  const cars = userInput.split(',');
  cars.forEach((car) => {
    validateUserInput(car);
  });
  return cars;
};

export default InputView;
