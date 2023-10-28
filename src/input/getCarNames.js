import { Console } from '@woowacourse/mission-utils';

async function getCarNames() {
  try {
    const USER_INPUT = await Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n');
    const CARS = USER_INPUT.split(',');
    return CARS;
  } catch (error) {
    throw new Error(error);
  }
}

export default getCarNames;
