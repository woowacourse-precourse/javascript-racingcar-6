import { Console } from '@woowacourse/mission-utils';

function printCarStatus(carNames, carCount) {
    carNames.forEach((carName) => {
        Console.print(`${carName} : ${'-'.repeat(carCount[carNames.indexOf(carName)])}`);
    });
    Console.print('');
}

export default printCarStatus;
