import { MissionUtils } from "@woowacourse/mission-utils";

class Car {
    constructor(name) {
        this.name = name;
        this.forwardCount = 0;
    }

    goForword() {
        this.forwardCount += 1;
    }

    printState() {
        MissionUtils.Console.print(`${this.name} : ${"-".repeat(this.forwardCount)}`);
    }

    isWinner(maxCount) {
        return maxCount === this.forwardCount;
    }

    get getName() {
        return this.name;
    }

    get getForwardCount() {
        return this.forwardCount;
    }
}

export default Car;
