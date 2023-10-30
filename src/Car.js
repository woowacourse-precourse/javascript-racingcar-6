import { Random } from "@woowacourse/mission-utils";

class Car {
    constructor(name) {
        this.name = name;
        this.position = 0;
    }

    getPosition() {
        return this.position;
    }

    move() {
        const RANDOM_NUM = Random.pickNumberInRange(0, 9);
        if (RANDOM_NUM >= 4) {
            this.position += 1;
        }
    }

    toString() {
        return `${this.name} : ${'-'.repeat(this.position)}`;
    }
}