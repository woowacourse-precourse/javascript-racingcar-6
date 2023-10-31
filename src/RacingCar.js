import { MissionUtils } from '@woowacourse/mission-utils';
import { INPUT_ROUND, INPUT_CAR_NAME, GAME_RESULT } from './constants';
import App from './App';
import Car from './Car';

class RacingCar {
    constructor() {
        this.app = new App();
        this.car = new Car();

        this.carNameList = [];
        this.round = 0;
        this.winner = [];
    }

    async start() {
        await this.getInput();
        MissionUtils.Console.print(GAME_RESULT);
        for (let i = 0; i < this.round; i++) {
            this.playRacingGame();
            this.printResult();
        }
        this.printwinner();
    }

    async getInput() {
        const carName = await MissionUtils.Console.readLineAsync(INPUT_CAR_NAME);
        const round = await MissionUtils.Console.readLineAsync(INPUT_ROUND);

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
                throw new Error('[ERROR] 자동차 이름은 1자 이상, 5자 이하가 되야 합니다.');
            this.carNameList.push(new Car(carName));
        });
    }

    isValidRound(round) {
        if (isNaN(round)) {
            throw new Error('[ERROR] 숫자가 잘못된 형식입니다.');
        }
    }

    playRacingGame() {
        this.carNameList.forEach(car => car.move());
    }

    printResult() {
        for (const car of this.carNameList)
            MissionUtils.Console.print(`${car.getName()} : ${car.getPosition()}`);
    }

    findTheWinner() {
        const maxPosition = Math.max(...this.carNameList.map(car => car.getPosition().length));
        for (const car of this.carNameList)
            if (car.getPosition().length === maxPosition) this.winner.push(car.getName());
    
    }

    printwinner() {
        this.findTheWinner();
        MissionUtils.Console.print(`최종 우승자 : ${this.winner.join(", ")}`);
    }
    
}

export default RacingCar;