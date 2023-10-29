import { Race } from './CarRace.js';
import { ConsoleView } from './RaceView.js';

export class RaceController {
    constructor(carNames) {
        this.model = new Race(carNames);
    }

    startRace(times) {
        for (let i = 0; i < times; i++) {
            this.model.startRound();
            this.displayRace();
        }
        this.displayWinners();
    }

    displayRace() {
        this.model.cars.forEach(car => {
            ConsoleView.printRace(car);
        });
        ConsoleView.printEmptyLine();
    }

    displayWinners() {
        const winners = this.model.getWinners();
        ConsoleView.printWinners(winners);
    }
}
