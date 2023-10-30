import { MissionUtils } from '@woowacourse/mission-utils';
import { CAR } from '../pages/texts.js';

export default function progressRacingCar(CARS) {
    CARS.forEach((car) => {
        let info = car.name + ' : ';
        for (let i = 0; i < car.go; i++) info += CAR.PROCESS_BAR;
        MissionUtils.Console.print(info);
    });
    MissionUtils.Console.print('\n');
}
