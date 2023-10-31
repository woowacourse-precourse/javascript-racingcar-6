import { Random } from "@woowacourse/mission-utils";
import { RACE_MOVE_LIMIT_DIGIT, RACE_POSITION_OUTPUT } from "./Define";

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
        if (RANDOM_NUM >= RACE_MOVE_LIMIT_DIGIT) {
            this.position += 1;
        }
    }

    toString() {
        return `${this.name} : ${RACE_POSITION_OUTPUT.repeat(this.position)}`;
    }
}

export default Car;