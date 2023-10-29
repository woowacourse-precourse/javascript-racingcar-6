import { Random } from '@woowacourse/mission-utils';

class Data {
  randomNumberList(count) {
    const list = [];

    for (let i = 0; i < count; i++) {
      list.push(Random.pickNumberInRange(0, 9));
    }

    return list;
  }
}

export default Data;