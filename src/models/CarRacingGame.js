export default class CarRacingGames {
  constructor() {};

  /**
   * 유저에게 입력받은 자동차 이름들을 객체를 담은 배열의 형태로 만드는 메서드
   * @params {string}
   * @return [{
   *  names: {string},
   *  numberOfMovesForward: {number},
   * }]
   */
  static async setupCarList(carListString) {
    const carListArr = carListString
      .split(',')
      .map(carName => ({
        name: carName.trim(),
        numberOfMovesForward: 0,
      }));
    
    return carListArr;
  }
};
