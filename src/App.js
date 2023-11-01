import {MissionUtils} from "@woowacourse/mission-utils";
import Car from './Car.js';

class App {

    async play() {
        //TODO : 자동차 객체 생성
        const carNames = await this.getUserInputString();
        const lapCount = await this.getUserInputInt();
        const cars = carNames.map(name => new Car(name));

        MissionUtils.Console.print("실행 결과");

        for (let i = 0; i < lapCount; i++) {
            await this.goForward(cars);
            this.printResult(cars);
        }

        this.printWinner(cars);
    }

    async getUserInputString() {
        //TODO : 한 줄을 입력 받고 쉼표로 구분하여 세개의 문자열을 만듦
        let userInput = await MissionUtils.Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n");

        const userInputSplit = userInput.split(',');

        const uniqueNames = new Set();

        if (userInputSplit.length === 1) {
            throw new Error('[ERROR] 경주를 할 대상이 없습니다.');
        }
        for (const name of userInputSplit) {
            if (name.length > 5) {
                throw new Error('[ERROR] 이름은 5자 이하만 가능합니다.');
            }
            if (name.trim() === '') {
                throw new Error('[ERROR] 이름이 비어 있습니다.');
            }
            if (uniqueNames.has(name)) {
                throw new Error('[ERROR] 중복되는 이름이 있습니다.');
            }
            uniqueNames.add(name);
        }
        return userInputSplit;
    }

    async getUserInputInt() {
        //TODO : 시도할 횟수를 입력 받음
        let userInput = await MissionUtils.Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
        const inputAsInt = parseInt(userInput);

        if (inputAsInt<=0 || isNaN(inputAsInt)) {
            throw new Error('[ERROR] 잘못된 숫자 입력입니다.');
        }
        return inputAsInt;
    }

    printResult(cars) {
        //TODO : 실행 결과를 출력
        for (const car of cars) {
            MissionUtils.Console.print(`${car.name} : ${'-'.repeat(car.distance)}`);
        }
        MissionUtils.Console.print("");
    }

    randomInt() {
        //TODO : 랜덤한 값을 반환
        return MissionUtils.Random.pickNumberInRange(1, 9);
    }

    async isValueAboveFour(random) {
        //TODO : 무작위 값이 4이상일 경우인지를 판단
        return random >= 4;
    }

    async goForward(cars) {
        //TODO : 자동차 전진
        for (let i = 0; i < cars.length; i++) {
            if (await this.isValueAboveFour(await this.randomInt())) {
                cars[i].distance++;
            }
        }
    }

    printWinner(cars) {
        //TODO : 최송 우승자 안내 문구를 출력
        const maxDistance = Math.max(...cars.map(car => car.distance));
        const winners = cars.filter(car => car.distance === maxDistance);

        const winnerNames = winners.map(winner => winner.name).join(', ');
        MissionUtils.Console.print(`최종 우승자 : ${winnerNames}`);
    }
}

export default App;
