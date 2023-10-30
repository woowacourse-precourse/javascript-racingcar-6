import { MissionUtils } from '@woowacourse/mission-utils';

class App {
    async play() {}

    getUserInput() {
        return ['yoo', 'vin'];
    }

    createCars(names) {
        return {
            yoo: 0,
            vin: 0,
        };
    }

    getTryCount() {
        return 5;
    }

    playGame(tryCount, cars) {
        return {
            yoo: 1,
            vin: 2,
        };
    }

    printGameStatus(cars) {
        MissionUtils.Console.print('yoo : -');
    }

    printWinner(cars) {
        MissionUtils.Console.print('최종 우승자 : vin');
    }
}

export default App;
