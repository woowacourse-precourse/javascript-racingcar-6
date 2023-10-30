import { Console, Random } from '@woowacourse/mission-utils';

class Test {
    constructor(carNameArr) {
        this.moveCount = Array(carNameArr.length).fill(0);
    }

    async testing(carNameArr) {
        for (let i = 0; i < carNameArr.length; i++) {
            if (Random.pickNumberInRange(0, 9) >= 4) this.moveCount[i] += 1;
        }
        for (let i = 0; i < carNameArr.length; i++) {
            Console.print(`${carNameArr[i]} : ${'-'.repeat(this.moveCount[i])}`);
        }
        Console.print('\n');
    }

}

export default Test;