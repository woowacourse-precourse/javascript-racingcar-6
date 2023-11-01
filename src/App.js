import { MissionUtils, Console } from "@woowacourse/mission-utils";

class Car {
    constructor(name) {
        this.name = name;
        this.position = 0;
    }

    move() {
        const getScore = MissionUtils.Random.pickNumberInRange(0, 9);
        if (getScore >= 4) {
            this.position += 1;
        }
    }
}
class App {
    async play() {
        const carNames = await this.getCarNames();
        const tryCount = await this.getTryCount();

        const cars = carNames.map((carName) => new Car(carName));
        for (let i = 0; i < tryCount; i++) {
            Console.print("\n실행 결과");
            cars.forEach((car) => car.move());
            cars.forEach((car) => {
                Console.print(`${car.name} : ${"-".repeat(car.position)}`);
            });
            Console.print("\n");
        }
        const maxPosition = Math.max(...cars.map((car) => car.position));
        const winners = cars.filter((car) => car.position === maxPosition);
        const winnerNames = winners.map((winner) => winner.name);
        Console.print(`최종 우승자 : ${winnerNames.join(", ")}`);
    }

    async getCarNames() {
        const inputCarNames = await Console.readLineAsync(
            "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분) \n"
        );
        const carNames = inputCarNames.split(",").map(String);
        for (const carName of carNames) {
            if (carName.length < 1 || carName.length > 5) {
                throw new Error("[ERROR] 이름이 잘못된 형식입니다.");
            }
        }
        return carNames;
    }

    async getTryCount() {
        const inputTryCount = await Console.readLineAsync(
            "시도할 횟수는 몇 회 인가요? \n"
        );
        const tryCount = Number(inputTryCount);
        if (tryCount < 1 || tryCount > 50) {
            throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
        }
        return tryCount;
    }
}

export default App;
