import { Console } from "@woowacourse/mission-utils";
import Car from "./Car.js";

class CarRacingGame {

    constructor() {
        this.cars = [];
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

            const carNamesArray = carNames.split(",");
            if (this.validateCarNames(carNamesArray)) {
                throw new Error("[ERROR] 잘못된 입력입니다.");
            }

            for(let i = 0; i < carNamesArray.length; i++) {
                this.cars.push(new Car(carNamesArray[i]));
            }

            console.log(this.cars);

        } catch (error) {
            throw error;
        }
    }


    validateCarNames(carNamesArray) {
        carNamesArray.forEach(carName => {
            if (carName.length > 5 || carName.length === 0) return true;
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

export default CarRacingGame
