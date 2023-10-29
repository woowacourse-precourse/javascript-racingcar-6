import { MissionUtils } from "@woowacourse/mission-utils";

class Cars {
    constructor(names) {
        this.number = names.length;
        this.names = names;
        this.distances = new Array(names.length).fill(0);
    }

    moveCars() {
        for (var i = 0; i < this.number; i++) {
            if (this.isMove())
                this.distances[i]++;
        }
    }

    isMove() {
        const number = MissionUtils.Random.pickNumberInRange(0, 9);
        if (number >= 4)
            return true;
        else
            return false;
    };

    getWinners() {
        const winners = [];
        const maxDistance = Math.max(...this.distances);

        for (var i = 0; i < this.number; i++) {
            if (this.distances[i] == maxDistance)
                winners.push(this.names[i]);
        }

        return winners;
    }
}

export default Cars;