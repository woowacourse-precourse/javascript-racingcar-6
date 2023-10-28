import { Console } from '@woowacourse/mission-utils';

class inputView {
  async getCarName() {
    const carName = await Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)");
    // 유효한 형식인지 검사
    // 자동차 문자열을 쉼표를 기준으로 나눠 배열로 반환
    return carName;
  }
}