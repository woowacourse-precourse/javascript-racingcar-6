import { MissionUtils } from "@woowacourse/mission-utils";

class Victory {
    async compare(cars) {
        let max = 0;
        let winners = [];
        for (const car of cars) {
            if (car.position.length > max) {
                max = car.position.length;
                winners = [car.name];
            } else if (car.position.length === max) {
                winners.push(car.name);
            }
        }
        MissionUtils.Console.print(`최종 우승자: ${winners.join(', ')}\n`);
    }
}

export default Victory;