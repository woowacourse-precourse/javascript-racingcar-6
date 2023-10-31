/* eslint-disable import/no-unresolved */
/* eslint-disable class-methods-use-this */

import { MissionUtils } from '@woowacourse/mission-utils';

class Cars {
  async getCarsNames() {
    let carsNames;
    try {
      carsNames = await MissionUtils.Console.readLineAsync(
        '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
      );
      const carsArrs = this.splitCarsNames(carsNames);
      const isValidCars = this.validateCarsNames(carsArrs);
      if (!isValidCars) {
        return;
      }
      // MissionUtils.Console.print(isValidCars); //testing
      // eslint-disable-next-line consistent-return
      return isValidCars;
    } catch (err) {
      throw new Error(err);
    }
  }

  // 입력 시 유효성 검사 - 쉼표O, 공백X 유효성 검사
  // 유효성 통과 -> 자동차 배열 반환
  splitCarsNames(carsNames) {
    if (!carsNames.includes(',') && carsNames.length < 6) {
      throw new Error('[ERROR] 최소 2대 이상의 자동차를 입력해 주세요.');
    }
    if (!carsNames.includes(',')) {
      throw new Error('[ERROR] 쉼표로 자동차의 이름을 구분해 주세요.');
    }
    if (carsNames.includes(' ')) {
      throw new Error('[ERROR] 공백 없이 입력해 주세요.');
    }
    const carsArr = carsNames.split(',');
    return carsArr;
  }

  // 입력 후 유효성 검사 - 5자 이하 확인
  validateCarsNames(carsArr) {
    const moreThanFive = carsArr.filter((car) => car.length > 5);
    if (moreThanFive.length !== 0) {
      throw new Error('[ERROR] 각 자동차의 이름을 5자 이하로 입력해 주세요.');
    }
    return carsArr;
  }
}

export default Cars;
