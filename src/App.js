import {Console, MissionUtils} from "@woowacourse/mission-utils";

class App {

    async play() {

        const car_name_input = await Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n");
        const CARS = car_name_input.split(",");
        const CAR_CNT = CARS.length;
        let cnt_cars_go = [...new Array(CAR_CNT)].map((_, i) => 0);

    }
}

export default App;
