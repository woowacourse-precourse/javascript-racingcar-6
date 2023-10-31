import { MissionUtils } from '@woowacourse/mission-utils';

class App {
    async play() {
        const users = await this.getUserInput();
        const cars = this.createCars(users);
        const tryCount = await this.getTryCount();
        const result = this.playGame(tryCount, cars);
        this.printWinner(result);
    }

    async getUserInput() {
        const userinput = await MissionUtils.Console.readLineAsync(
            '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n'
        );

        const users = userinput.split(',').map((name) => name.trim());
        users.forEach((name) => {
            if (name.length > 5) {
                throw new Error('[ERROR] 이름이 너무 깁니다.');
            }

            if (name.length === 0) {
                throw new Error('[ERROR] 이름이 없습니다.');
            }
        });

        return users;
    }

    createCars(names) {
        const cars = {};
        names.forEach((name) => {
            cars[name] = 0;
        });
        return cars;
    }

    async getTryCount() {
        const userinput = await MissionUtils.Console.readLineAsync(
            '시도할 횟수는 몇 회인가요?\n'
        );
        const tryCount = Number(userinput);

        if (tryCount < 0) {
            throw new Error('[ERROR] 0보다 작은 수는 입력할 수 없습니다.');
        }

        if (isNaN(tryCount)) {
            throw new Error('[ERROR] 숫자가 아닙니다.');
        }

        return tryCount;
    }

    playGame(tryCount, cars) {
        MissionUtils.Console.print('');
        MissionUtils.Console.print('실행 결과');
        for (let i = 0; i < tryCount; i++) {
            Object.keys(cars).forEach((name) => {
                const randomNumber = MissionUtils.Random.pickNumberInRange(
                    0,
                    9
                );
                if (randomNumber >= 4) {
                    cars[name] += 1;
                }
            });

            this.printGameStatus(cars);
            MissionUtils.Console.print('');
        }
        return cars;
    }

    printGameStatus(cars) {
        Object.keys(cars).forEach((name) => {
            MissionUtils.Console.print(`${name} : ${'-'.repeat(cars[name])}`);
        });
    }

    printWinner(cars) {
        const max = Math.max(...Object.values(cars));
        const winners = Object.keys(cars).filter((name) => cars[name] === max);
        MissionUtils.Console.print(`최종 우승자 : ${winners.join(', ')}`);
    }
}

export default App;
