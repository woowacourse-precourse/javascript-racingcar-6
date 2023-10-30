export default class Utils {
  static createCarData(carNameList) {
    const carData = [];

    carNameList.forEach((carName) => {
      carData.push({ name: carName, number: 0, result: '' });
    });

    return carData;
  }

  static goStopCar(carData) {
    carData.forEach((data) => {
      if (data.number >= 4) data.result = data.result + '-';
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
