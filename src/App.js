import {Console, MissionUtils, Random} from "@woowacourse/mission-utils";

class App {
    check_car_name(CARS, CAR_CNT) {
        for (let i = 0; i < CAR_CNT; i++) {
            if (CARS[i].length > 5) {
                throw new Error("[ERROR] 자동차 이름이 5글자 이상입니다.");
            }
        }
    }

    check_try_cnt(try_cnt_input) {
        if (Number.isInteger(Number(try_cnt_input)) === false) {
            throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
        }
    }

    car_go_from_random(CAR_CNT, cnt_cars_go) {
        let random_value;
        for (let j = 0; j < CAR_CNT; j++) {
            random_value = Random.pickNumberInRange(0, 9)
            if (random_value >= 4) {
                cnt_cars_go[j] += 1;
            }
        }
        return cnt_cars_go;
    }

    print_game_state(CARS,CAR_CNT,cnt_cars_go){
        for (let j = 0; j < CAR_CNT; j++) {
            Console.print(CARS[j] + ' : ' + '-'.repeat(cnt_cars_go[j]))
        }
    }


    async play() {

        const CAR_NAME_INPUT = await Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n");
        const CARS = CAR_NAME_INPUT.split(",");
        const CAR_CNT = CARS.length;
        this.check_car_name(CARS, CAR_CNT)

        let cnt_cars_go = Array.from({length: CAR_CNT}, () => 0);

        let try_cnt_input = await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");

        this.check_try_cnt(try_cnt_input);

        const TRY_CNT = Number(try_cnt_input);

        Console.print("실행 결과");



        for (let i = 0; i < TRY_CNT; i++) {

            cnt_cars_go = this.car_go_from_random(CAR_CNT, cnt_cars_go)
            this.print_game_state(CARS,CAR_CNT,cnt_cars_go)
            Console.print("")

        }


        const WINNER_VALUE = Math.max.apply(Math, cnt_cars_go);

        let winner_index = 1;
        let winner_print = "최종 우승자 : ";
        let cnt = 0;
        while (winner_index !== -1) {
            cnt += 1;
            winner_index = cnt_cars_go.indexOf(WINNER_VALUE);

            if (winner_index !== -1) {
                if (cnt > 1) {
                    winner_print += ', ';
                }
                winner_print += CARS[winner_index]
                cnt_cars_go[winner_index] = -1;

            }

        }

        Console.print(winner_print);


    }


}

export default App;
