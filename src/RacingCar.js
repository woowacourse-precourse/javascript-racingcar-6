import inputView from './InputView.js';
import outputView from './OutputView.js';
import validation from './validation.js';
import Car from './Car.js';

class RacingCar {
    constructor() {
        this.car = new Car();

        this.round = 0;
        this.winner = [];
        this.carList = [];
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

        this.findWinner();
        outputView.printWinner(this.winner);
    }

    findWinner() {
        const maxMove = Math.max(...this.carList.map(car => car.getCarMove().length));
        for (const car of this.carList)
            if (car.getCarMove().length === maxMove) this.winner.push(car.getCarName());
    }
}

export default RacingCar;