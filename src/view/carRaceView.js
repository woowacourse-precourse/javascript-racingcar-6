import { MissionUtils } from '@woowacourse/mission-utils';

// Result 클래스 정의
class Result {
    // 최종 결과 출력 메서드
    FinalResult(carList) {
        let maxPosition = 0;
        let maxPositionCars = [];

        carList.forEach((car) => {
            if (car.movesNum > maxPosition) {
                maxPosition = car.movesNum;
                maxPositionCars = [car.name];
            } else if (car.movesNum === maxPosition) {
                maxPositionCars.push(car.name);
            }
        });
        MissionUtils.Console.print(`최종 우승자 : ${maxPositionCars.join(',')}`);
    }
}

export default Result;