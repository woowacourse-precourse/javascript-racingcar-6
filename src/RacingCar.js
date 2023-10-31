import { MissionUtils } from "@woowacourse/mission-utils";
import { INPUT_ROUND, INPUT_CAR_NAME } from "./constants";
import App from './App';
import Car from "./Car";

class RacingCar {
    constructor() {
        this.app = new App();
        this.car = new Car();
        this.carNameList = [];
        this.round = 0; // 시도 횟수   
    }

    async start() {
        await this.getInput();
        for (let i = 0; i < this.round; i++) {
            this.playRacingGame();
            this.printResult();
        }
        this.printwinner();
    }

    async getInput() {
        const carName = await MissionUtils.Console.readLineAsync(INPUT_CAR_NAME);
        const round = await MissionUtils.Console.readLineAsync(INPUT_ROUND); // 문자로 입력받음

        this.isValidRound(round);
        this.isValidCarName(carName);

        this.round = round;
    }

    isValidCarName(carName) {
        const carNames = carName.split(',');

        if (carName === '') {
            throw new Error('[ERROR] 잘못된 입력입니다.');
        }

        carNames.forEach(carName => {
            if (carName.length === 0 || carName.length > 5)
                throw Error("[ERROR] 자동차 이름은 1자 이상, 5자 이하가 되야 합니다.");
            this.carNameList.push(new Car(carName));
        });
    }

    isValidRound(round) {
        if (isNaN(round)) {
            throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
        }
    }

    playRacingGame() {
        this.carNameList.forEach(car => car.move());
    }

    printResult() {
        for (const car of this.carNameList)
            MissionUtils.Console.print(`${car.getName()} : ${car.getPosition()}`);
    }

    printwinner() {
        const maxPosition = Math.max(...this.carNameList.map(car => car.getPosition().length));
        const winner = [];
        for (const car of this.carNameList)
            if (car.getPosition().length === maxPosition) winner.push(car.getName());
        MissionUtils.Console.print(`최종 우승자: ${winner.join(", ")}`);
    }
    
}

export default RacingCar;