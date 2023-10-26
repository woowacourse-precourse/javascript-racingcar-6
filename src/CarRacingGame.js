import { Console } from "@woowacourse/mission-utils";

class CarRacingGame {

    constructor() {
        this.cars;
    }

    start() {
        this.getCarNames();
    }

    async getCarNames() {
        try {
            const carNames = await Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n');
            if(carNames === '') {
                throw new Error("[ERROR] 잘못된 입력입니다.");
            }

            this.cars = carNames.split(",");
            
            if (this.validateCarNames(this.cars) === false) {
                throw new Error("[ERROR] 잘못된 입력입니다.");
            }

        } catch (error) {
            throw error;
        }
    }


    validateCarNames(cars) {
        cars.forEach(car => {
            if(car.length > 5 || car.length === 0) return false;
            return true;
        });
    }

}

const test = new CarRacingGame();
test.start();

export default CarRacingGame