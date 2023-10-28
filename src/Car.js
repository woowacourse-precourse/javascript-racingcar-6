import { MissionUtils } from "@woowacourse/mission-utils";

class Car {
    constructor(name) {
        this.name = name;
        this.forwardCount = 0;
    }

    goForword() {
        this.forwardCount += 1;
        MissionUtils.Console.print(this.forwardCount);
    }

    printState() {
        MissionUtils.Console.print(`${this.name} : ${"-".repeat(this.forwardCount)}`);
    }
}

export default Car;
