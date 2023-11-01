import { CAR, ERROR, LETTER } from '../pages/texts.js';
import { MissionUtils } from '@woowacourse/mission-utils';

export default async function inputRacingCarName() {
    let CARS = [];
    /** 자동차 이름 입력받기 */
    const CarsNameInput = await MissionUtils.Console.readLineAsync(CAR.input);

    /** 입력받은 자동차 이름을 쉼표(,)를 기준으로 구분 */
    const Cars = CarsNameInput.split(LETTER.comma);

    Cars.forEach((car) => {
        /** 자동차 한 대 이름의 길이 */
        const lengthOfCarName = [...car].length;
        if (lengthOfCarName > 5) throw new Error(ERROR.length);
        CARS.push({ name: car, go: 0 });
    });

    return CARS;
}
