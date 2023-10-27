import { Console } from '@woowacourse/mission-utils';
import { checkCarValid } from './checkInputValid.js';

async function receiveCarName() {
  const input = await Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n');
  const carList = checkCarValid(input);
  return carList;
}

export default receiveCarName;

receiveCarName();
