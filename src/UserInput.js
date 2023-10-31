import { MissionUtils } from "@woowacourse/mission-utils";
import Save from './ValueSave.js'
import Validation from "./Validation.js";
import Score from "./Score.js"

export default class User {
    async userInputCarName() {
        const inputCarName = await MissionUtils.Console.readLineAsync(
            '경주할 자동차 이름을 입력하세요. (이름은 쉼표(,) 기준으로 구분) : \n'
        );
        await this.getCarNames(inputCarName);
    }

    async getCarNames(userInput) {
        this.cars = [];
        let names = userInput.split(',');
        names.map((element) => {
            this.cars.push(new Save(element))
        });
        this.checkName(names)
        await this.userInputPlayNumber()
    }

    checkName(names) {
        try {
            Validation.carNameValidation(names)
        } catch(e) {
          throw(e)
        }
        // console.log(names)
    }   // 여기서 받는 'names'은 유효성 검사를 통과하고 받은 값

    async userInputPlayNumber() {
        const inputPlayNumer = await MissionUtils.Console.readLineAsync(
            '시도할 횟수는 몇 회인가요? \n'
        )
        try {
            Validation.checkNumber(inputPlayNumer)
        } catch(e) {
          throw(e)
        }

        let score = new Score
        score.playGames(inputPlayNumer,this.cars)
    } 
}
