import { Console, Random } from '@woowacourse/mission-utils';

function RandomNumber() {
    const randomNumber = Random.pickNumberInRange(0, 9);
    return randomNumber;
}

function DeterimineMoving(racingCars, name) {
    if (RandomNumber() > 3) {
        if (racingCars.has(name)) racingCars.set(name, 1 + racingCars.get(name));
        else racingCars.set(name, 1);
    }
}

function printWinner(maxRate, racingCars) {
    let result = [];
    racingCars.forEach((rate, name) => {
        if (rate === maxRate) result.push(name);
    })
    Console.print(`최종 우승자 : ${result.join(', ')}`);
}

export { DeterimineMoving, printWinner };
