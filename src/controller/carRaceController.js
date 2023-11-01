import { MissionUtils } from '@woowacourse/mission-utils';
import Result from "../view/carRaceView.js";

// Play 클래스 정의
class Play {
    // 자동차 경주 메서드
    racing(carList) {
        carList.forEach((car) => {
            const RACE_TIMES = MissionUtils.Random.pickNumberInRange(0, 9);

            if (RACE_TIMES > 3) {
                car.move(); // 3초과 1칸 전진
            }

            MissionUtils.Console.print(`${car.name} : ${'-'.repeat(car.position)}`);
        });
    }

    raceStart(raceTimes, carList) {
        if (!Number.isNaN(raceTimes)) {
            // 실행결과 준비
            MissionUtils.Console.print('실행 결과');
            //입력된 횟수만큼 레이싱 경주 실행
            for(let i = 0;  i < raceTimes; i++ ){
                this.racing(carList);
            }
        }
    }

// 경주 횟수 입력 메서드
    async inputRaceTimes(carList) {
        MissionUtils.Console.print('시도할 횟수는 몇 회인가요?');
        const RACE_TIMES = await MissionUtils.Console.readLineAsync('');
        this.raceStart(RACE_TIMES, carList);
        new Result().FinalResult(carList);
    }
    }

export default Play;