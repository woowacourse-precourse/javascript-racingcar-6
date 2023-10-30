import { MissionUtils } from '@woowacourse/mission-utils';

export const getCarArrFromInputValue = async () => {
  let inputCarNames = await MissionUtils.Console.readLineAsync(
    '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n'
  );
  let carArr = [];
  while (1) {
    let commaIndex = inputCarNames.indexOf(',');
    if (commaIndex > 5) {
      throw new Error('[ERROR] 자동차 이름은 다섯 글자 이하로 입력해주세요.');
    }
    if (commaIndex === -1) {
      carArr.push({ name: inputCarNames.substr(0), moveCnt: 0 });
      break;
    }

    carArr.push({
      name: inputCarNames.substr(0, commaIndex),
      moveCnt: 0,
    });

    inputCarNames = inputCarNames.substr(commaIndex + 1);
  }

  return carArr;
};

export const getTryNumber = async () => {
  let inputTryNumber = await MissionUtils.Console.readLineAsync(
    '시도할 횟수는 몇 회인가요?\n'
  );

  return inputTryNumber;
};
