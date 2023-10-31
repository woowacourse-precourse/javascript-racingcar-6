import { SYMBOL } from "../constants/constants";
import InputView from "../view/inputView";

class Car {
  #name;
  #distance;

  constructor(carName) {
    this.#name = carName;
    this.#distance = 0;
  }

  // 이동 여부 판단 후 이동 결과 반환
  // 자동차 한대
  move() {
    const randomNumber = Random.pickNumberInRange(1, 9);
    if (randomNumber > 4) {
      this.distance++;
    }
    return this.distance;
  }
  //getter: name을 밖으로 빼서 쓸 수 있게, 외부에서 읽기만 가능하게(읽기 전용)
  // 함수지만 프로퍼티로
  get name() {
    return this.#name;
  }
}

export default Car;
