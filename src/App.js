import { CAR } from './pages/texts.js';
import { MissionUtils } from '@woowacourse/mission-utils';
import { inputRacingCarName, inputTryNumber, isStart, printWinner, progressRacingCar } from './pages/modules.js';

class App {
    async play() {
        const CARS = await inputRacingCarName();
        let TRY = await inputTryNumber();

        MissionUtils.Console.print(CAR.RESULT);

        while (TRY--) {
            CARS.forEach((car) => {
                if (isStart()) car.go++;
            });
            progressRacingCar(CARS);
        }
        const winner = printWinner(CARS);
        MissionUtils.Console.print(CAR.WINNER + winner);
    }
}

export default App;
