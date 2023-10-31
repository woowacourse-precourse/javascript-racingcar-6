import { Console, Random } from '@woowacourse/mission-utils';

export const inputCarNames = async () => {
  try {
    const carNames = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
    );
    return carNames;
  } catch (error) {
    Console.print(error.message);
  }
};

export const inputTryNum = async () => {
  try {
    const tryNum = await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
    return tryNum;
  } catch (error) {
    Console.print(error.message);
  }
};

export const isValidCarNames = carNames => {
  const carNameArr = Array.from(carNames.replace(/ +$/, ''));
  const lengthErr = carNameArr.length === 0;
  const commaErrFirstIndex = carNameArr[0] === ',';
  const commaErrLastIndex = carNameArr[carNameArr.length - 1] === ',';
  return !lengthErr && !commaErrFirstIndex && !commaErrLastIndex;
};

export const isValidTryNum = tryNum => {
  //Q. 시도횟수에 대한 제한은? ex) n < 10000 조건을 넣어야 할지 말지고민
  const regex = /^\d+$/;
  return regex.test(tryNum);
};

export const isValidCarName = carName => {
  const lengthErr = carName.length > 5;
  return !lengthErr;
};

export const tryCarGame = carList => {
  carList.forEach(car => {
    if (getRandomNumber() >= 4) car.move();
  });
};

export const printTryResult = carList => {
  carList.forEach(car => {
    Console.print(`${car.name} : ` + '-'.repeat(car.position));
  });
  Console.print('');
};

export const getRandomNumber = () => {
  const number = Random.pickNumberInRange(0, 9);
  return number;
};

export const getWinners = carList => {
  const maxPos = carList.reduce((prev, curr) => {
    return prev.position >= curr.position ? prev : curr;
  });
  const maxPosCars = carList.filter(car => car.position === maxPos.position);
  const winners = maxPosCars.map(car => car.name);
  return winners;
};
export const printWinners = winnerList => {
  Console.print(`최종 우승자: ${winnerList.join(', ')}`);
};
