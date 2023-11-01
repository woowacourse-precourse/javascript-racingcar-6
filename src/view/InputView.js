import { Console } from '@woowacourse/mission-utils';

export default class InputView {
  constructor() {
    this.mappedInputCarListAndUserInputPlayNumber = { userInputCarList: [], userInputPlayNumber: 0 };
    this.userInputCarList = [];
    this.userInputPlayNumber = 0;
  }

  async mappingInputCarListAndUserInputPlayNumber() {
    this.mappedInputCarListAndUserInputPlayNumber.userInputCarList = await this.inputCarName();
    this.mappedInputCarListAndUserInputPlayNumber.userInputPlayNumber = await this.inputPlayNumber();
    return this.mappedInputCarListAndUserInputPlayNumber;
  }

  async inputCarName() {
    const regExp = {
      blank: /\s/g,
      number: /[0-9]/g,
      special: /[!@#$%^&*()_+{}[\]<>.?~\\=]/g,
    };
    const carNameString = await Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)');
    if (regExp.blank.test(carNameString)) {
      throw new Error('[ERROR] 자동차 이름에 공백을 사용할 수 없습니다.');
    }
    if (regExp.number.test(carNameString)) {
      throw new Error('[ERROR] 자동차 이름에 숫자를 사용할 수 없습니다.');
    }
    if (regExp.special.test(carNameString)) {
      throw new Error('[ERROR] 자동차 이름에 특수문자를 사용할 수 없습니다.');
    }

    const carNameArray = carNameString.split(',');
    carNameArray.forEach(carName => {
      if (carNameArray.length > 5) {
        throw new Error('[ERROR] 자동차 이름은 5 글자를 초과할 수 없습니다.');
      }
      if (carNameArray.length === 1) {
        throw new Error('[ERROR] 자동차 이름은 2개 이상 입력해야 합니다.');
      }
      if (carNameArray.length === 0) {
        throw new Error('[ERROR] 자동자 이름을 입력하지 않았습니다.');
      }
      if (carNameArray.filter(carNameElement => carNameElement === carName).length >= 2) {
        throw new Error('[ERROR] 자동차 이름은 중복될 수 없습니다.');
      }
    });
    return this.makeCarObject(carNameArray);
  }

  async inputPlayNumber() {
    this.playNumber = await Console.readLineAsync('시도할 횟수를 입력하세요.');

    if (this.playNumber <= 0) {
      throw new Error('[ERROR] 시도할 횟수에는 1이상의 값을 입력해야 합니다.');
    }
    if (Number.isNaN(this.playNumber)) {
      throw new Error('[ERROR] 시도할 횟수에는 숫자만 입력할 수 있습니다.');
    }
    this.userInputPlayNumber = this.playNumber;
  }

  makeCarObject(carNameArray) {
    carNameArray.forEach((userInputCar, index) => {
      this.userInputCarList[index] = { carName: userInputCar, score: 0 };
    });
    return this.userInputCarList;
  }
}
