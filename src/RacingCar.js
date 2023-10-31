import { MissionUtils } from '@woowacourse/mission-utils';

export default class RancingCar {
  name;
  steps = 0;

  constructor(name) {
    this.name = name;
  }

  informSteps() {
    const { name, steps } = this;
    return { name, steps };
  }

  async race() {
    const number = MissionUtils.Random.pickNumberInRange(0, 9);
    if (number >= 4) {
      this.steps += 1;
    }

    return this.informSteps();
  }
}
