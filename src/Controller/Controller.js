import { InputView } from '../View/InputView.js';
import Car from '../Model/Car.js';
import OutputView from '../View/OutputView.js';

export default class Controller {
    constructor() {
        this.cars = [];
        this.rounds = 0;
    }

    async startGame() {
        const carNames = await InputView.readCarNames();
        const rounds = await InputView.readRoundCounts();
        this.initializeCars(carNames);
        this.rounds = rounds;

        this.startRun();
    }

    initializeCars(carNames) {
        carNames.split(",").map((name) => {
            this.cars.push(new Car(name));
        });
    }

    startRun() {
        this.iterateCarInRounds(this.rounds);
    }

    iterateCarInRounds(rounds) {
        OutputView.printResultMessage();
        Array.from({ length: this.rounds }, (_) => {
            this.startRound();
        });
    }

    startRound() {
        this.cars.map((car) => {
            car.attemptForward();
            OutputView.print(`${car.name} : ${car.distance}`);
        });
        OutputView.print('');
    } 
}