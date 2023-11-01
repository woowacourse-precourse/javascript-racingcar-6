import { Console } from '@woowacourse/mission-utils';

const checkCarNameValid = (userInputCarNames) => {
  const carNameDict = {};
  const carNames = userInputCarNames.split(',');

  carNames.forEach((name) => {
    const checkCarNameLength = name.length;

    if (Object.keys(carNameDict).includes(name)) {
      throw new Error('[ERROR] 이름은 중복될 수 없습니다.');
    } else if (checkCarNameLength >= 1 && checkCarNameLength <= 5) {
      carNameDict[name] = 0;
    } else {
      throw new Error('[ERROR] 자동차 이름은 1글자~5글자입니다.');
    }
  });

  return carNameDict;
};

const checkTrialCountValid = (userInputTrialCount) => {
  const strToNumber = Number(userInputTrialCount);

  if (!isNaN(strToNumber)) return strToNumber;
  else throw new Error('[ERROR] 시도 횟수는 숫자만 입력 가능합니다.');
};

const getUserInput = async () => {
  let carNameDict = {};

  const userInputCarNames = await Console.readLineAsync(
    '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n'
  );

  carNameDict = checkCarNameValid(userInputCarNames);

  const userInputTrialCount = await Console.readLineAsync(
    '시도할 횟수는 몇 회인가요?\n'
  );

  const trialCount = checkTrialCountValid(userInputTrialCount);

  return { carNameDict, trialCount };
};

export { getUserInput };
