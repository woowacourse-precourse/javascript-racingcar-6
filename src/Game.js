import { Console } from '@woowacourse/mission-utils';
import { enterCarNames, enterAttempts } from './UserInput.js';
import { printResultTitle, printEachResult, printWinner } from './PrintOutput.js';
import { RandomNumbers } from './RandomNumbers.js';



function Game() {
    let racingCars = new Map();
    printResultTitle(); 
    for (let i = 0; i < enterAttempts(); i++) {
        printEachResult(enterCarNames(), racingCars);
        Console.print('\n');
    }
    const maxRate = Array.from(racingCars.values()).reduce((a, b) => Math.max(a, b));
    printWinner(maxRate, racingCars);
}

function DeterimineMoving(racingCars, name) {
    if (RandomNumbers() > 3) {
        if (racingCars.has(name)) racingCars.set(name, 1 + racingCars.get(name));
        else racingCars.set(name, 1);
    }
}

export { Game, DeterimineMoving };