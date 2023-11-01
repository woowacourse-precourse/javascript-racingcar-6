import { Console, Random } from '@woowacourse/mission-utils';

export default class RacingGame {
constructor() {
    this.cars = [];
}

addCar(name) {
    if (name.length > 5) {
        throw new Error('[ERROR] 자동차 이름은 5자 이하로 입력해야 합니다: ' + name);
    }
    this.cars.push({ name, distance: 0 });
}

async race(totalMoves) {
    console.log('자동차 경주 게임을 시작합니다!');

    for (let move = 0; move < totalMoves; move++) {
        console.log(`\n[이동 횟수 ${move + 1}]`);
        for (const car of this.cars) {
        this.moveCar(car);
        this.printCarState(car);
        await Console.sleep(100); // 잠시 대기
    }
    }

    console.log('\n게임이 종료되었습니다.');
    const maxDistance = Math.max(...this.cars.map(car => car.distance));
    const winners = this.cars
        .filter(car => car.distance === maxDistance)
        .map(car => car.name);

    console.log('최종 우승자:', winners.join(', '));
}

moveCar(car) {
    const randomNumber = Random.pickNumberInRange(0, 9);
    if (randomNumber >= 4) {
        car.distance++;
    }
}

printCarState(car) {
    const dashes = '-'.repeat(car.distance);
    console.log(`${car.name} : ${dashes}`);
}
}

