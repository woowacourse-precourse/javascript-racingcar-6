import { pickNumberInRange } from "../utils/index.js";
import { RULES } from '../constants/index.js';
class Car {
    constructor(name) {
        this.name = name;
        this.distance = "";
    }
    isMove() {
        const number = pickNumberInRange(RULES.MIN_MOVE,RULES.MAX_MOVE);
        console.log(`(${this.name}) number: ${number}\n`);
        if (number < RULES.STANDARD) {
            console.log('(${this.name}) 이동 실패\n');
            return false;
        } else if (number >= RULES.STANDARD) {
            console.log('(${this.name}) 이동 성공\n');
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