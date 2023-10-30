import {Console, MissionUtils, Random} from "@woowacourse/mission-utils";

class App {

    async play() {

        const CAR_NAME_INPUT = await Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n");
        const CARS = CAR_NAME_INPUT.split(",");
        const CAR_CNT = CARS.length;

        //자동차 이름이 5글자 이하인지 확인
        for (let i = 0; i < CAR_CNT; i++) {
            if (CARS[i].length > 5) {
                throw("[ERROR] 자동차 이름이 5글자 이상입니다.");
            }
        }

        let cnt_cars_go = [...new Array(CAR_CNT)].map((_, i) => 0);

        let try_cnt_input = await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");

        //숫자 형식 확인
        if (Number.isInteger(Number(try_cnt_input)) === false) {
            throw("[ERROR] 숫자가 잘못된 형식입니다.");
        }
        const TRY_CNT = Number(try_cnt_input);
        Console.print("실행 결과");
        let random_value;
        for (let i = 0; i < TRY_CNT; i++) {
            for (let j = 0; j < CAR_CNT; j++) {
                random_value = Random.pickNumberInRange(0, 9)
                if (random_value >= 4) {
                    cnt_cars_go[j] += 1
                }
            }
            for (let j=0;j<CAR_CNT;j++){
                Console.print(CARS[j]+' : '+'-'.repeat(cnt_cars_go[j]))
            }
            Console.print("")
        }






    }
}

export default App;
