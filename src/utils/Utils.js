import { CONFIG } from '../constants/constants';

export default class Utils {
  static createCarData(carNameList) {
    const carData = [];

    carNameList.forEach((carName) => {
      carData.push({
        name: carName,
        number: CONFIG.initNumber,
        result: CONFIG.initResult,
      });
    });

    return carData;
  }

  static goStopCar(carData) {
    carData.forEach((data) => {
      if (data.number >= CONFIG.goNumber)
        data.result = data.result + CONFIG.goString;
    });

    return carData;
  }

  static pickWinner(carData) {
    const maxResultLength = Math.max(
      ...carData.map((data) => data.result.length),
    );

    const winners = carData
      .filter((data) => data.result.length === maxResultLength)
      .map((winner) => winner.name);

    return winners;
  }
}
