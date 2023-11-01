import inputView from './InputView.js';
import validation from './validation.js';

class RacingCar {
    async input() {
        const carName = await inputView.readCarInput();
        const carList = carName.split(',');
        validation.checkCarName(carList);

        const round = await inputView.readRoundInput();
        validation.checkRound(round);
    }
}

export default RacingCar;