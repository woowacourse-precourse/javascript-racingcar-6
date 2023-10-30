import { MissionUtils } from '@woowacourse/mission-utils';

async function getAndValidateCarNames() {
  const carNames = await getCarNames();
  const carNamesArray = convertNamesToArray(carNames);
  validateCarNames(carNamesArray);
  return carNamesArray;
}

async function getCarNames() {
  const carNames = await MissionUtils.Console.readLineAsync(
    '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n'
  );
  return carNames;
}

function convertNamesToArray(carNames) {
  const carNamesArray = carNames.split(',');
  return carNamesArray;
}

function validateCarNames(carNamesArray) {
  const pattern = /^[a-z]{1,5}$/;
  const uniqueCarNamesArray = [...new Set(carNamesArray)];

  carNamesArray.forEach((carName) => {
    if (!pattern.test(carName)) {
      throw new Error(
        '[ERROR] 이름의 형식이 잘못됐습니다. 이름은 1글자 이상 5글자 이하의 영어 소문자만 가능합니다'
      );
    }
  });

  if (carNamesArray.length < 2) {
    throw new Error('[ERROR] 이름은 두 개 이상 입력해야 합니다.');
  }

  if (carNamesArray.length !== uniqueCarNamesArray.length) {
    throw new Error('[ERROR] 이름은 중복될 수 없습니다.');
  }
}

export default getAndValidateCarNames;
