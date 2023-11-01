import { MissionUtils } from "@woowacourse/mission-utils";

/**
 * 자동차 이동 계산 함수
 * @param {*} cars 
 * @param {*} attempts 
 */
export function* carRace(cars, attempts) {

    for (let i = 0; i < attempts; i++) {
        cars.forEach(car => {
            const move = MissionUtils.Random.pickNumberInRange(0, 9);
            if (move >= 4) {
                car.position += '-';
            }
        });

        yield cars.map(car => `${car.name} : ${car.position}`);
    }
}