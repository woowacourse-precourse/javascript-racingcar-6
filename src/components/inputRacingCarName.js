import { CAR, ERROR } from '../pages/texts.js';
import { MissionUtils } from '@woowacourse/mission-utils';

export default async function inputRacingCarName() {
    let CARS = [];
    /** 자동차 이름 입력받기 */
    const CarsNameInput = await MissionUtils.Console.readLineAsync(CAR.INPUT);

    /** 입력받은 자동차 이름을 쉼표(,)를 기준으로 구분 */
    const Cars = CarsNameInput.split(',');

    Cars.forEach((car) => {
        /** 자동차 한 대의 이름의 길이 측정 */
        const lengthOfCarName = [...car].length;
        if (lengthOfCarName > 5) throw new Error(ERROR.LENGTH);
        CARS.push({ name: car, go: 0 });
    });

    return CARS;

    /* 자동차 이름 예외 처리 */
    // for (let i = 0; i < Cars.length; i++) {
    //     if (Cars[i].length > 5) {
    //         /* 길이가 5보다 길때 */
    //         throw new Error(ERROR.LENGTH);
    //     } else if (Cars[i].length == 0) {
    //         /* 길이가 0일때 */
    //         throw new Error(ERROR.INCLUDE_0);
    //     } else {
    //         MissionUtils.Console.print(Cars[i] + ' : ');
    //     }
    // }
}

inputRacingCarName();
