const { Random, Console } = require('@woowacourse/mission-utils');
const Car = require('./Car');

async function startRace() {
    try {
        const carNames = (await Console.readLineAsync('경주할 자동차 이름을 입력하세요 (이름은 쉼표(,)로 구분): ')).split(',');
        for (const name of carNames) {
            if (name.length > 5) {
                throw new Error("[ERROR] 자동차 이름은 5글자 이하로 입력하세요.");
            }
        }

        let numMoves;
        while (true) {
            numMoves = parseInt(await Console.readLineAsync('시도할 횟수는 몇 회인가요? '));
            if (!isNaN(numMoves) && numMoves > 0) {
                break;
            } else {
                Console.print("[ERROR] 유효한 횟수를 입력하세요.");
            }
        }

        const cars = carNames.map(name => new Car(name.trim()));

        Console.print('\n실행 결과');
        for (let i = 0; i < numMoves; i++) {
            for (const car of cars) {
                car.move();
            }

            for (const car of cars) {
                Console.print(car.toString());
            }
        }

        const maxPosition = Math.max(...cars.map(car => car.position));
        const winners = cars.filter(car => car.position === maxPosition).map(car => car.name);
        if (winners.length === 1) {
            Console.print(`\n최종 우승자: ${winners[0]}`);
        } else {
            Console.print(`\n최종 우승자: ${winners.join(', ')}`);
        }

    } catch (error) {
        Console.print(error.message);
    }   
}

module.exports = startRace;
