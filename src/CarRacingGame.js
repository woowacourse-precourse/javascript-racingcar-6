import { Console } from "@woowacourse/mission-utils";

class CarRacingGame {

    constructor() {
        this.cars;
        this.attempts;
    }

    async start() {
        await this.getCarNames();
        await this.getNumberOfAttempts();
    }

    async getCarNames() {
        try {
            const carNames = await Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n');
            if (carNames === '') {
                throw new Error("[ERROR] 잘못된 입력입니다.");
            }

            this.cars = carNames.split(",");
            if (this.validateCarNames(this.cars)) {
                throw new Error("[ERROR] 잘못된 입력입니다.");
            }

        } catch (error) {
            throw error;
        }
    }


    validateCarNames(cars) {
        cars.forEach(car => {
            if (car.length > 5 || car.length === 0) return true;
            return false;
        });
    }

    async getNumberOfAttempts() {
        try {
            this.attempts = await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');

            if(this.validateAttempts(this.attempts)) {
                throw new Error("[ERROR] 잘못된 입력입니다.");
            }
        } catch (error) {
            throw error;
        }
    }


    validateAttempts(attempts) {
        for (let i = 0; i < attempts.length; i++) {
            let char = attempts.charAt(i)
            let ascii = char.charCodeAt()
            if ('1'.charCodeAt() <= ascii && ascii <= '9'.charCodeAt()) {
                continue;
            }
            return true;
        }
        return false;
    }

}

const test = new CarRacingGame();
test.start();

export default CarRacingGame