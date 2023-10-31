import { Console } from '@woowacourse/mission-utils';
import { DeterimineMoving, printWinner } from './GameFactors.js';


function Game(carNames, attempts, racingCars) {
    Console.print('실행 결과');
    for (let i = 0; i < attempts; i++) {
        carNames.forEach((name) => {
            DeterimineMoving(racingCars, name)
            Console.print(`${name} : ${'-'.repeat(racingCars.get(name))}`);
        })
        Console.print('\n');
    }
    const maxRate = Array.from(racingCars.values()).reduce((a, b) => Math.max(a, b));
    printWinner(maxRate, racingCars);
}


export default Game;