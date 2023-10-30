const ErrorHandler = {
  carNamesType(cars) {
    if (cars.indexOf(',') === -1) {
      throw new Error('쉼표(,)를 기준으로 구분해야 합니다.');
    }

    const namesTypeConversion = cars.split(',');

    if (namesTypeConversion.filter((car) => car.lngeth === 0).length > 0) {
      throw new Error('각 이름은 1자 이상이여야 합니다.');
    }
    if (namesTypeConversion.filter((car) => car.lngeth >= 5).length > 0) {
      throw new Error('각 이름은 5자 이하여야 합니다.');
    }
  },

  countType(count) {
    const isNotNumber = /[^0-9]/;

    if (isNotNumber.test(count)) {
      throw new Error('0~9의 숫자형태로 입력해야합니다.');
    }
  }
}

export default ErrorHandler;