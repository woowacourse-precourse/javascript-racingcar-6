import { Console } from '@woowacourse/mission-utils';
class CarRacingView {
  static async promptCarNames() {
    return Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분) \n',
    );
  }

  static async promptRaceCount() {
    return Console.readLineAsync('시도할 횟수는 몇 회인가요? \n');
  }
}

export default CarRacingView;
