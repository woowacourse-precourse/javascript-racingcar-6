import { Console } from '@woowacourse/mission-utils';

class GetCarsName {
  #carsNameList;

  async getCarsNameString() {
    try {
      Console.print(
        '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)'
      );
      const carsString = await Console.readLineAsync('');

      return carsString;
    } catch (e) {}
  }

  stringToList(carsString) {
    const carsList = carsString.split(',');

    return carsList;
  }

  validate(carsList) {
    carsList.forEach((name) => {
      if (name.length > 5) {
        throw new Error('[Error] 이름은 5자 이하만 가능합니다.');
      }
    });

    this.#carsNameList = carsList;
  }

  async getCarsNameList() {
    const carsString = await this.getCarsNameString();
    const carsList = await this.stringToList(carsString);
    this.validate(carsList);

    return this.#carsNameList;
  }
}

// const a = new GetCarsName();
// a.getCarsNameList();

export default GetCarsName;
