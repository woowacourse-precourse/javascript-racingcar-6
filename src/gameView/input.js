import { Console } from '@woowacourse/mission-utils';

class Input {
  async getRacingcarsNames() {
    const racingcarNames = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분): ',
    );
    return racingcarNames;
  }

  async getNumberOfAttempt() {
    const NumberOfAttemps = await Console.readLineAsync('시도 횟수: ');
    return NumberOfAttemps;
  }
}
export default Input;
