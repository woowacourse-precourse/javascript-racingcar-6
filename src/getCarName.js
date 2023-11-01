import { Console } from '@woowacourse/mission-utils';

const getCarName = async function getCarNameByUserInput() {
  const CAR_NAME_INPUT = await Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)');

  const CAR_NAME_ARRAY = CAR_NAME_INPUT.split(',');

  CAR_NAME_ARRAY.forEach((element) => {
    if (element.length > 5) {
      throw Error('[ERROR] 입력이 잘못된 형식입니다.');
    }
  });

  return CAR_NAME_ARRAY;
}

export default getCarName;