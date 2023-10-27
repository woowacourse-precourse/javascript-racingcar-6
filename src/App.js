import { Console } from '@woowacourse/mission-utils';
import { isUserInputValid, splitCarsInput } from './utils.js';

class App {
  /**
   *  - [ ] 자동차 이름 입력 유효성 검증 기능
   *   - 자동차 입력은 쉽표 **,** 로 구분된다. v
   *   - 자동차 이름은 5자 이하로만 가능하다. v
   *   - 숫자는 포함할 수 없다. v
   *   - 같은 이름을 가진 차가 2개 이상 존재할 수 없다. v
   *   - 공백을 포함할 수 없다. v
   *   - 자동차 갯수는 10대 이하로 제한한다. v
   *  */

  async play() {
    const carsInput = await this.getCarName();
    isUserInputValid(carsInput);
    splitCarsInput(carsInput);
  }

  async getCarName() {
    return await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)',
    );
  }
}

export default App;
