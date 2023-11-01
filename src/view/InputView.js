import { Console } from '@woowacourse/mission-utils';

export default class InputView {
  constructor() {
    this.userInputCarList = [];
    this.userInputPlayNumber = 0;
  }

  async inputCarName() {
    // carName 입력 받기
    const carNameString = await Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)');
    const carNameArray = carNameString.split(',');
    // 예외 처리 후 this.userInputCarList에 재할당
    carNameArray.forEach(carName => {
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
    return this.makeCarObj(carNameArray);
  }

  // playNumber 입력받기
  async inputPlayNumber() {
    this.playNumber = await Console.readLineAsync('시도할 횟수를 입력하세요.');
    if (this.playNumber <= 0) {
      throw new Error('[ERROR] 시도할 횟수에는 1이상의 값을 입력해야 합니다.');
    }
    if (typeof this.playNumber !== 'number') {
      throw new Error('[ERROR] 시도할 횟수에는 숫자만 입력할 수 있습니다.');
    }
    // this.userInputPlayNumber에 재할당
    this.userInputPlayNumber = this.playNumber;
  }

  // 회차별 출력에 쓸 양식 만들기 { pobi : ----- }
  makeCarObj(carNameArray) {
    // const { userInputCarList } = this.inputView;
    carNameArray.forEach((userInputCar, index) => {
      this.userInputCarList[index] = { carName: userInputCar, score: 0 };
    });
    return this.userInputCarList;
  }
}
