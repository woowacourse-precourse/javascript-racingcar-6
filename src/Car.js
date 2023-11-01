import { Random, Console } from '@woowacourse/mission-utils'

export default class Car {
    #name;
    #moveCount = 0;

    constructor(name) {
        this.#name = name
    }

    getMoveCount() {
        return this.#moveCount;
    }
    
    tryMoveForward() {
        const random_number = Random.pickNumberInRange(0, 9);

        if (random_number >= 4)
            this.#moveCount++;
    }

    printMoveCount() {
        Console.print(`${this.#name} : ${'-'.repeat(this.#moveCount)}`);
    }
}