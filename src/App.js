import { MissionUtils } from '@woowacourse/mission-utils';

class App {
    async play() {}

    async getUserInput() {
        const userinput = await MissionUtils.Console.readLineAsync(
            '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n'
        );

        console.log(userinput);

        const users = userinput.split(',').map((name) => name.trim());
        users.forEach((name) => {
            if (name.length > 5) {
                throw new Error('[ERROR] 이름이 너무 깁니다.');
            }

            if (name.length === 0) {
                throw new Error('[ERROR] 이름이 없습니다.');
            }
        });

        console.log(users);

        return users;
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
