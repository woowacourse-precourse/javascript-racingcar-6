import { Console } from '@woowacourse/mission-utils';
import { RandomNumbers } from './RandomNumbers.js';


function printResultTitle() {
    Console.print('실행 결과\n');
}

//각 게임 실행 결과 출력 
function printEachResult(names, racingCars) {
    names.forEach((name) => {
        const moveOrNot = RandomNumbers();
        if (moveOrNot > 3) {
            if (racingCars.has(name)) racingCars.set(name, 1 + racingCars.get(name));
            else racingCars.set(name, 1);
        }
        Console.print(`${name} : ${'-'.repeat(racingCars.get(name))}`);
    })
}

//우승자 출력 
function printWinner(maxRate, racingCars) {
    let result = [];
    racingCars.forEach((rate, name) => {
        if (rate === maxRate) result.push(name);
    })
    Console.print(`최종 우승자 : ${result.join(', ')}`);
}

export { printResultTitle, printEachResult, printWinner };
