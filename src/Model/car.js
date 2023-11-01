import { NUMBER } from '../Constant/constants';

class Car {
  constructor() {
    this.name = '';
    this.count = 0;
  }
  //이름저장
  setName(name) {
    this.name = name;
  }

  //자동차 현재 위치 저장
  checkCount(tryNum) {
    if (tryNum >= NUMBER.MORE_RANDOM_NUMBER) {
      this.count++;
    }
  }
  //위치 반환
  getCount() {
    return this.count;
  }
}

export default Car;
