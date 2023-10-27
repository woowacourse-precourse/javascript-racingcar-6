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
        cars[0].distance++;
        cars[1].distance++;
        cars[2].distance++;
        //const lapCount = await this.getUserInputInt();
        await this.printResult(cars);
    }

    async getUserInputString() {
        //TODO : 한 줄을 입력 받고 쉼표로 구분하여 세개의 문자열을 만듦
        let userInput = await MissionUtils.Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n");
        // if () {
        //     throw new Error('[ERROR]');
        // }
        const userInputSplit = userInput.split(',');
        return userInputSplit;
    }

    async getUserInputInt() {
        //TODO : 시도할 횟수를 입력 받음
    }

    async printResult(cars) {
        //TODO : 실행 결과를 출력
        for (let i = 0; i < cars.length; i++) {
            MissionUtils.Console.print(cars[i].name+" : "+'-'.repeat(cars[i].distance));
        }
    }

    async randomInt() {
        //TODO : 랜덤한 값을 반환
    }

    async goForward() {
        //TODO : 자동차 전진
    }

    async printWinner() {
        //TODO : 최송 우승자 안내 문구를 출력
    }
}

export default App;
