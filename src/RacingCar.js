import inputView from './InputView.js';
import validation from './validation.js';
import Car from './Car.js';

class RacingCar {
    constructor() {
        this.car = new Car();
        this.carList = [];
        this.round = 0;
    }

    async checkInput() {
        const carName = await inputView.readCarInput();
        const carList = carName.split(',');
        validation.checkCarName(carList);
        this.carList.push(new Car(carList));

        const round = await inputView.readRoundInput();
        validation.checkRound(round);
        this.round = round;
    }

    async startGame() {
        await this.checkInput();
        for (let i = 0; i < this.round; i++) {
            this.carList.forEach(car => car.moveCar());
        }
    }
}

export default RacingCar;