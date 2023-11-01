import { Random } from '@woowacourse/mission-utils';

export default class Car {
    constructor(name) {
    this.name = name;
    this.distance = 0;
}

move() {
    const randomNumber = Random.pickNumberInRange(0, 9);
    if (randomNumber >= 4) {
        this.distance++;
    }
}
}
