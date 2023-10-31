import { Console } from '@woowacourse/mission-utils';
import { carMessages, tryMessage, resultMessage } from './Messages.js';
import { carValidate, tryValidate } from './Validation.js';

export const getCarName = async () => {
  const carName = await Console.readLineAsync(carMessages.INPUT);
  const carNames = carName.split(',');
  carValidate(carNames);
  return carNames;
};

export const getTryCount = async () => {
  const tryCount = await Console.readLineAsync(tryMessage.INPUT);
  tryValidate(tryCount);
  return tryCount;
};

export const printResultHeader = () => {
  Console.print(resultMessage.HEADER);
};

export const printResultCar = (cars) => {
  cars.forEach((car) => {
    let d = '';
    for (let i = 0; i < car.distance; i += 1) {
      d += '-';
    }

    Console.print(`${car.name} : ${d}`);
  });
  Console.print('');
};

export const printResultWinner = (winners) => {
  Console.print(`${resultMessage.WINNER}${winners.join(', ')}`);
};
