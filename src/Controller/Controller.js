import { InputView } from '../View/InputView.js';
import Car from '../Model/Car.js';

export default class Controller {
    constructor() {
        this.cars = [];
    }

    async start() {
        const carNames = await InputView.readCarNames();
        const counts = await InputView.readTryCounts();
        this.initializeCars(carNames);
        console.log(this.cars);
    }

    initializeCars(carNames) {
        carNames.split(",").map((name) => {
            this.cars.push(new Car(name));
        })
    }
}