import { Console } from '@woowacourse/mission-utils';
import Validation from './validation.js';

export default class View extends Validation {
  readCarNames() {
    const carNames = Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요(이름은 쉼표(,) 기준으로 구분)\n'
    );
    /**
     * validation 체크 내용 추가
     * ex) 이름이 5자 이상인 경우, 이름에 특수문자가 포함된 경우
     */
    const carNamesToArray = carNames.split(',');
    return carNamesToArray;
  }
}
