import { Car } from './CarInfo.js';
import { MissionUtils } from '@woowacourse/mission-utils';

export class Race {
    constructor(carNames) {
        this.cars = carNames.map(name => new Car(name));
    }

    startRound() {
        this.cars.forEach(car => {
            const randomNumber = MissionUtils.Random.pickNumberInRange(0, 9);
            //console.log(randomNumber);
            car.move(randomNumber);
        });
    }

    getWinners() {
        const maxPosition = Math.max(...this.cars.map(car => car.position));
        return this.cars.filter(car => car.position === maxPosition).map(car => car.name);
    }
}
