import { MissionUtils } from '@woowacourse/mission-utils';

function race(carNamesArray, tryCount) {
  const carProgressArray = carNamesArray.map(() => '');

  MissionUtils.Console.print('\n실행결과');

  while (tryCount > 0) {
    updateCarProgress(carProgressArray);
    printCarProgress(carNamesArray, carProgressArray);
    tryCount -= 1;
  }
  return carProgressArray;
}

function updateCarProgress(carProgressArray) {
  carProgressArray.forEach((carProgress, index, carProgressArray) => {
    const randomNumber = MissionUtils.Random.pickNumberInRange(0, 9);

    if (randomNumber >= 4) {
      carProgressArray[index] = carProgress + '-';
    }
  });
  return carProgressArray;
}

function printCarProgress(carNamesArray, carProgressArray) {
  carNamesArray.forEach((carName, index) => {
    MissionUtils.Console.print(`${carName} : ${carProgressArray[index]}`);
  });
  MissionUtils.Console.print('');
}

export default race;
