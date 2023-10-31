import { Console } from '@woowacourse/mission-utils';

export default class RecieveInputView {
  async recieveCarName() {
    // carName 입력 받기
    const carNameString = await Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)');
    const carNameArray = carNameString.split(',');
    // 예외 처리 후 리턴
    return carNameArray.forEach(carName => {
      if (carNameArray.length > 5) {
        throw new Error('[ERROR] 자동차 이름은 5 글자를 초과할 수 없습니다.');
      }
      if (carNameArray.length === 1) {
        throw new Error('[ERROR] 자동차 이름은 2개 이상 입력해야 합니다.');
      }
      if (carNameArray.lenght === 0) {
        throw new Error('[ERROR] 자동자 이름을 입력하지 않았습니다.');
      }
      if (carNameArray.filter(carNameElement => carNameElement === carName).length >= 2) {
        throw new Error('[ERROR] 자동차 이름은 중복될 수 없습니다.');
      }
    });
  }
}
