// 자동차 위치 초기화 객체
const initializeCarsPosition = (carNames) => {
  return carNames.reduce((carsPosition, name) => {
    carsPosition[name] = 0;
    return carsPosition;
  }, {});
};
