import inputView from './InputView.js';

class RacingCar {
    async input() {
        const carName = await inputView.readCarInput();
        const carList = carName.split(',');

        const round = await inputView.readRoundInput();
    }
}

export default RacingCar;