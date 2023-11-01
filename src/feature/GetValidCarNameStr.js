import { Console } from '@woowacourse/mission-utils';

export const checkLengthLessThanFive = (str) => {
  const condition = str?.length <= 5;
  return !!condition;
};

export const checkCarNameStrValidity = (carNameList) => {
  const conditionList = carNameList.map(checkLengthLessThanFive);
  const isFalseInCondition = conditionList.some((x) => !x);
  return !isFalseInCondition;
};

const getValidCarNameStr = async () => {
  const carNameStr = await Console.readLineAsync(
    '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n'
  );
  const carNameList = carNameStr.split(',');
  const iscarNameStrValid = checkCarNameStrValidity(carNameList);
  if (!iscarNameStrValid) {
    throw new Error('[ERROR]');
  }

  return carNameStr;
};
export default getValidCarNameStr;
