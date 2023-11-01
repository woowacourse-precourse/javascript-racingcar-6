import inputView from './InputView.js';
import outputView from './OutputView.js';
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

        carList.forEach((car) => this.carList.push(new Car(car)));

        const round = await inputView.readRoundInput();
        validation.checkRound(round);
        this.round = round;
    }

    async startGame() {
        await this.checkInput();
        
        outputView.printResult();
        for (let i = 0; i < this.round; i++) {
            this.carList.forEach(car => car.moveCar());
            for (const car of this.carList)
                outputView.printCarResult(car.getCarName(), car.getCarMove());
        }
    }
}

export default RacingCar;