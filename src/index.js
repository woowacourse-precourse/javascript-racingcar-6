import App from "./App.js";

import { Random, Console } from '@woowacourse/mission-utils';

class Car {
    constructor(name) {
        this.name = name;
        this.position = 0;
    }

    move() {
        const randomValue = Random.pickNumberInRange(0, 9);
        if (randomValue >= 4) {
            this.position++;
        }
    }

    getName() {
        return this.name;
    }

    getPosition() {
        return this.position;
    }
}

class RacingGame {
    constructor() {
        this.cars = [];
    }

    addCar(name) {
        this.cars.push(new Car(name));
    }

    async race() {
        const attempts = await Console.readLineAsync('시도할 횟수는 몇 회인가요?');
        if (attempts <= 0) {
            console.log('[ERROR] 시도 횟수는 1 이상이어야 합니다.');
            return;
        }
        for (let attempt = 0; attempt < attempts; attempt++) {
            this.cars.forEach((car) => {
                car.move();
            });
            this.printRaceStatus(attempt + 1);
            await new Promise((resolve) => setTimeout(resolve, 1000)); // 각 시도 사이에 1초씩 대기
        }
        this.printWinners();
    }

    printRaceStatus(attempt) {
        console.log(`시도 ${attempt}:`);
        this.cars.forEach((car) => {
            const positionStr = '-'.repeat(car.getPosition());
            console.log(`${car.getName()} : ${positionStr}`);
        });
    }

    printWinners() {
        const maxPosition = Math.max(...this.cars.map((car) => car.getPosition()));
        const winners = this.cars
            .filter((car) => car.getPosition() === maxPosition)
            .map((car) => car.getName())
            .join(', ');

        console.log('최종 우승자:', winners);
    }

    async play() {
        const carNames = await Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)');
        const carNameArray = carNames.split(',').map((name) => name.trim());

        carNameArray.forEach((name) => this.addCar(name));
        this.race();
    }
}

const game = new RacingGame();
game.play();

const app = new App();
app.play();
