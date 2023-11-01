class Car {  // 자동차와 전진 횟수를 관리하기 위한 Car 클래스

  constructor (carName) {
    this.carName = carName;
    this.headCount = 0;
  }

  getCarName() {
      return this.carName;
    }

  addHeadCount() {
    this.headCount ++;
  }

  getHeadCount() {
    return this.headCount;
  }
}

  export default Car;