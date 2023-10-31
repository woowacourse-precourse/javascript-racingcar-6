import { Random } from "@woowacourse/mission-utils";

const GO = 1;

export default class Distance {
  isGoStop(carObject) {
    const num = Random.pickNumberInRange(0, 9);
    if (num > 3) {
      carObject.distance += GO;
    }
  }
  async addDistancePrintArray(attempts, carArray) {
    for (let i = 0; i < attempts; i++) {
      carArray?.map((carObject) => {
        this.isGoStop(carObject);
        //distance -로 바꿔서 차수별로 전부 출력하기
      });
    }
  }
}
