import { Console } from '@woowacourse/mission-utils';

const getCarName = async function getCarNameByUserInput() {
  const CAR_NAME = await Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)');

  return CAR_NAME.split(',');
}

export default getCarName;