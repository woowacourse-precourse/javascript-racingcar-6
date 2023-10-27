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
  Console.print('경주할 자동차 이름을 입력하세요(이름은 쉼표(,) 기준으로 구분)');
  const carNames = await Console.readLineAsync().split(',');

  verificationNames(carNames);

  return carNames;
};

export const inputNumber = async () => {
  Console.print('시도할 회수는 몇회인가요?');
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
  if (champion.length < 2) {
    Console.print(`최종 우승자: ${champion[0]}`);
  } else {
    Console.print(`최종 우승자: ${champion.join(', ')}`);
  }
};
