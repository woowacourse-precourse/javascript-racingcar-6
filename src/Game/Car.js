import { pickNumberInRange } from "../utils/index.js";
import { RULES } from '../constants/index.js';
class Car {
    constructor(name) {
        this.name = name;
        this.distance = "";
    }
    isMove() {
        const number = pickNumberInRange(RULES.MIN_MOVE,RULES.MAX_MOVE);
        if (number < RULES.STANDARD) {
            return false;
        } else if (number >= RULES.STANDARD) {
            return true;
        }
    }

    move() {
        const isMove = this.isMove();
        if (isMove) {
            this.distance += "-";
        }
    }

    getDistance() {
        return this.distance.length;
    }

    toStringResult() {
        return `${this.name} : ${this.distance}\n`;
    }
}

export default Car;