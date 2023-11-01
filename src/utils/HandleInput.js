import { Console } from '@woowacourse/mission-utils';

export const handleInputName = async () => {
  const CAR_STRING = await Console.readLineAsync(
    '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)',
  );

  return validateString(CAR_STRING);
};

export const handleInputRound = async () => {
  const GAME_ROUND = await Console.readLineAsync('시도할 횟수는 몇 회인가요?');

  return validateNumber(GAME_ROUND);
};

const validateString = (carstring) => {
  const CAR_SPLIT = carstring.split(',');
  const set = new Set();
  for (let CAR of CAR_SPLIT) {
    if (CAR.match(/\./)) {
      throw new Error('[ERROR] : 자동차 이름은 쉼표로 구분하여야 합니다.');
    }
    if (CAR.length > 5) {
      throw new Error('[ERROR] :  자동차 이름은 5자 이하여야 합니다.');
    }
    if (set.has(CAR)) {
      throw new Error('[ERROR] : 중복된 이름은 사용할 수 없습니다.');
    } else {
      set.add(CAR);
    }
  }
  return CAR_SPLIT;
};

const validateNumber = (roundnumber) => {
  const TO_NUMBER = parseInt(roundnumber);
  if (roundnumber.match(/\D/)) {
    throw new Error('[ERROR] : 숫자를 입력해주세요.');
  }
  if (TO_NUMBER <= 0) {
    throw new Error('[ERROR] : 1 이상의 숫자를 입력해주세요.');
  }
  return TO_NUMBER;
};
