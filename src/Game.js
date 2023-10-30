import { Console } from '@woowacourse/mission-utils';
import { enterCarNames, enterAttempts } from './UserInput.js';
import { printResultTitle, printEachResult, printWinner } from './PrintOutput.js';
import { RandomNumbers } from './RandomNumber.js';



function Game() {
    let racingCars = new Map();
    let carNames = enterCarNames();
    let attempt = enterAttempts();
    printResultTitle(); 
    for (let i = 0; i < attempt; i++) {
        printEachResult(carNames, racingCars);
        Console.print('\n');
    }
    const maxRate = Array.from(racingCars.values()).reduce((a, b) => Math.max(a, b));
    console.log(racingCars);
    printWinner(maxRate, racingCars);
}

function DeterimineMoving(racingCars, name) {
    if (RandomNumbers() > 3) {
        if (racingCars.has(name)) racingCars.set(name, 1 + racingCars.get(name));
        else racingCars.set(name, 1);
    }
}

export { Game, DeterimineMoving };