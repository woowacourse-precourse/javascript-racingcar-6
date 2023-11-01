import { CONFIG } from '../constants/constants';

export default class Utils {
  /*
   * @param {array} carNameList - 쉼표를 기준으로 분리한 자동차 이름들을 담은 배열
   * @returns {array} carData - 매개변수로 받은 자동차 이름과 무작위 숫자 초기값, 전진 거리 초기값을 가진 오브젝트를 담은 배열
   */
  static createCarData(carNameList) {
    const carData = [];

    carNameList.forEach((carName) => {
      carData.push({
        name: carName,
        randomNumber: CONFIG.initNumber,
        result: CONFIG.initResult,
      });
    });

    return carData;
  }

  /*
   * @param {array} carData - 자동차 이름, 무작위 숫자, 전진 거리 초기값을 가진 오브젝트를 담고 있는 배열
   * @returns {array} carData - 자동차 이름, 무작위 숫자, 전진 거리를 가진 오브젝트를 담고 있는 배열
   */
  static goStopCar(carData) {
    carData.forEach((data) => {
      if (data.randomNumber >= CONFIG.goNumber)
        data.result = data.result + CONFIG.goString;
    });

    return carData;
  }

  /*
   * @param {array} carData - 자동차 이름, 무작위 숫자, 전진 거리를 가진 오브젝트를 담고 있는 배열
   * @returns {array} winnerList - 우승 자동차 이름을 담고 있는 배열
   */
  static pickWinner(carData) {
    const maxResultLength = Math.max(
      ...carData.map((data) => data.result.length),
    );

    const winnerList = carData
      .filter((data) => data.result.length === maxResultLength)
      .map((winner) => winner.name);

    return winnerList;
  }
}
