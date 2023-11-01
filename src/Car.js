import { MissionUtils } from '@woowacourse/mission-utils';

class Car {
  constructor(name, runningResult = '') {
    this.name = name;
    this.runningResult = runningResult;
  }

  // error  Expected 'this' to be used by class method 'runOrNot'  class-methods-use-this
  //  이 규칙은 클래스의 메소드에서 'this' 키워드를 사용하도록 요구합니다.
  // 현재 'runOrNot' 메소드는 'this'를 사용하지 않고 있습니다. 이 메소드가 클래스의 어떤 속성을 이용하지 않는다면,
  // 이 메소드를 정적 메소드로 만들어 이 문제를 해결할 수 있습니다. 정적 메소드는 클래스의 인스턴스 없이도 호출할 수 있는 메소드입니다.
  // 이거 스태틱 넣어야함? 그럴경우에 car.runOrNot(car.runningResult);와 같은 코드를
  // Car.runOrNot(car.runningResult);와 같이 변경해야 합니다.

  runOrNot(previousResult = '') {
    if (MissionUtils.Random.pickNumberInRange(0, 9) < 4) {
      return previousResult;
    }
    return `${previousResult}-`;
  }
}

export default Car;
