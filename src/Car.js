import { MissionUtils } from "@woowacourse/mission-utils";

class Car {
    constructor(name) {
        this.name = name;
        this.moves = 0;
    }

    printMoves() {
        let totalMoves = '';
        for (let i = 0; i < this.moves; i++) {
            totalMoves += '-';
        }
        return totalMoves;
    }
}

export default Car;