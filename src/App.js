import {MissionUtils} from "@woowacourse/mission-utils";
import Car from './Car.js';

class App {

    async play() {
        //TODO : 자동차 객체 생성
        const cars = [];
        const numberOfCars = 3;

        const carName = await this.getUserInputString();
        for (let i = 0; i < numberOfCars; i++) {
            cars.push(new Car(carName[i]));
        }

        const lapCount = await this.getUserInputInt();

        MissionUtils.Console.print("실행 결과");

        for (let i = 0; i < lapCount; i++) {
            await this.goForward(cars);
            await this.printResult(cars);
            MissionUtils.Console.print("");
        }
        await this.printWinner(cars);
    }

    async getUserInputString() {
        //TODO : 한 줄을 입력 받고 쉼표로 구분하여 세개의 문자열을 만듦
        let userInput = await MissionUtils.Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n");

        const userInputSplit = userInput.split(',');

        for (const name of userInputSplit) {
            if (name.length > 5) {
                throw new Error('[ERROR] 이름은 5자 이하만 가능합니다.');
            }
        }
        return userInputSplit;
    }

    async getUserInputInt() {
        //TODO : 시도할 횟수를 입력 받음
        let userInput = await MissionUtils.Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
        const inputAsInt = parseInt(userInput);

        if (isNaN(inputAsInt)) {
            throw new Error('[ERROR] 숫자가 잘못된 형식입니다.');
        }
        return inputAsInt;
    }

    async printResult(cars) {
        //TODO : 실행 결과를 출력
        for (let i = 0; i < cars.length; i++) {
            MissionUtils.Console.print(cars[i].name + " : " + '-'.repeat(cars[i].distance));
        }
    }

    async randomInt() {
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
            if (await this.isValueAboveFour(await this.randomInt())) cars[i].distance++;
        }
    }

    async printWinner(cars) {
        //TODO : 최송 우승자 안내 문구를 출력
        const maxDistance = Math.max(...cars.map(car => car.distance));
        const winners = cars.filter(car => car.distance === maxDistance);

        if (winners.length === 1) {
            MissionUtils.Console.print(`최종 우승자 : ${winners[0].name}`);
        } else {
            MissionUtils.Console.print(`최종 우승자 : ${winners.map(winner => winner.name).join(', ')}`);
        }
    }
}

export default App;
