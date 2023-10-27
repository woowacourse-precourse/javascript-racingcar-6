import { Console } from '@woowacourse/mission-utils';

export const verificationNames = (carNames) => {
  if (carNames.length === 0) {
    throw new Error('[ERROR] 자동차 이름을 입력해주세요');
  }

  for (let i = 0; i < carNames.length; i += 1) {
    if (carNames[i].length > 5) {
      throw new Error('[ERROR] 자동차 이름은 5자 이하만 가능합니다.');
    }
  }
};

export const inputCarName = async () => {
  const carNames = await Console.readLineAsync().split(',');

  verificationNames(carNames);

  return carNames;
};

export const inputNumber = async () => {
  const number = await Console.readLineAsync();

  return Number(number);
};

export const printAction = (gameResults) => {
  gameResults.forEach((gameResult) => {
    const [carName, result] = gameResult;

    const dash = '-'.repeat(result);

    Console.print(`${carName} : ${dash}\n`);
  });
};

export const printResult = (champion) => {
  if (champion < 2) {
    Console.print(`최종 우승자: ${champion}`);
  } else {
    Console.print(`최종 우승자: ${champion.join(', ')}`);
  }
};
