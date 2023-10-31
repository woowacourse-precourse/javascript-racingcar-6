import { Random } from '@woowacourse/mission-utils';
import { RANGE_NUMBER } from './constant';

const createRandomNumber = () => {
  const randomNumber = Random.pickNumberInRange(
    RANGE_NUMBER.randomNumberMax,
    RANGE_NUMBER.randomNumberMax
  );

  return randomNumber;
};

const checkCanMove = () => createRandomNumber() >= RANGE_NUMBER.canMove;

const checkCarNamesHaveBlank = (carNames) =>
  carNames.includes('') || carNames.includes(' ');

const checkCarNameIsOverFive = (carNames) => {
  const inputHaveOverFive = carNames.find(
    (carName) => carName.length > RANGE_NUMBER.carName
  );
  return inputHaveOverFive;
};

const checkCarNameWithBlank = (carNames) => {
  const inputWithBlank = carNames.filter((car) => car.includes(' '));
  return inputWithBlank.length !== 0;
};

const checkCarNamesAreDuplicated = (carNames) => {
  const carNumber = carNames.length;
  const nonDuplicatedCarNames = [...new Set(carNames)];

  return carNumber !== nonDuplicatedCarNames.length;
};

const checkTryNumberWithBlank = (userInput) => {
  const inputHaveBlank = userInput.includes(' ');
  return inputHaveBlank;
};

const checkTryNumberIsCharacter = (userInput) =>
  Number.isNaN(Number(userInput)) || Number(userInput) === 0;

export {
  createRandomNumber,
  checkCanMove,
  checkCarNamesHaveBlank,
  checkCarNameIsOverFive,
  checkCarNameWithBlank,
  checkCarNamesAreDuplicated,
  checkTryNumberWithBlank,
  checkTryNumberIsCharacter,
};
